import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Token;


const AddClass = () => {


  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();



  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          console.log(imgResponse.data);
          const imgURL = imgResponse.data.display_url;
          const { name, price, email, instructor, seat } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            email,
            image: imgURL,
            instructor,
            seat: parseFloat(seat),
          };
          console.log(newItem);
          axiosSecure.post('/classes', newItem)
            .then(data => {
            console.log(data.data)
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Class Added Successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
            }
          })
        }
      });
  };

  const { user } = useContext(AuthContext);
  return (
    <div className="w-full ml-20">
      <h2 className="text-3xl my-10">Add A New Class</h2>
      <form className="items-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name", { required: true, maxLength: 80 })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              disabled
              defaultValue={user.displayName}
              {...register("instructor", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="text"
              disabled
              defaultValue={user.email}
              {...register("email", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              {...register("seat", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              {...register("price", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <input
          className="btn btn-accent my-5"
          type="submit"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddClass;
