import React, { useRef, useState } from 'react';
import { AddPost } from '../../api/userApi';
import { useQuery } from "@tanstack/react-query";
import adminRequest from '../../utils/AdminRequest';
import { useNavigate } from "react-router-dom";



const AddPostForm = () => {
  const navigate = useNavigate()
  const [currenterror, setError] = useState('');
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const fileRef = useRef(null);
  const daysRef = useRef(null);
  const descriptionRef = useRef(null);
  const amountRef = useRef(null);
  const featuresRef = useRef(null);

  const generateError = (field, message) => {
    setError(`${field} ${message}`);
    setTimeout(() => setError(''), 3000);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['categorys'],
    queryFn: () => adminRequest.get("/categorys")
      .then((res) => res.data)
  });

  if (isLoading) {
    return <h1>Loading.....</h1>
  }
  if (error) {
    return <h1>something went wrong</h1>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!titleRef.current?.value.trim()) {
      generateError('Title', 'is required.');
    } else if (!categoryRef.current?.value.trim()) {
      generateError('category', 'is required.');
    } else if (!fileRef.current?.value.trim()) {
      generateError('image', 'is required.');
    } else if (!daysRef.current?.value.trim()) {
      generateError('days', 'is required.');
    } else if (!descriptionRef.current?.value.trim()) {
      generateError('des', 'is required.');
    } else if (descriptionRef.current?.value.trim().length < 15) {
      generateError('des', 'must be more');
    } else if (!amountRef.current?.value.trim()) {
      generateError('amount', 'is required.');
    } else if (!featuresRef.current?.value.trim()) {
      generateError('feautures', 'is required.');
    } else {

      const formData = new FormData();
      formData.append('title', titleRef.current.value);
      formData.append('category', categoryRef.current.value);
      formData.append('days', parseInt(daysRef.current.value));
      formData.append('description', descriptionRef.current.value);
      formData.append('amount', parseInt(amountRef.current.value));
      formData.append('features', featuresRef.current.value);
      const files = fileRef.current.files;
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      

      AddPost(formData).then((res)=>{
        if(res.data.created){
          navigate("/")
        }
      })

    }


  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-xl mx-auto bg-white p-5 rounded-md shadow-sm mt-0">
        <div className="text-center mb-5">
          <h1 className="font-bold text-3xl">New Post</h1>
        </div>
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <div className="space-y-5">
            <div className="flex space-x-4">
              <input
                ref={titleRef}
                className="flex-1 p-2 border border-gray-200 rounded-md"
                type="text"
                placeholder="Title*"
              />
              <select ref={categoryRef} className="flex-1 p-2 border border-gray-200 rounded-md">
                <option value="" disabled selected>
                  Category*
                </option>
                {data.map((category) => (
                  <option key={category._id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex space-x-4">
              <input
                ref={fileRef}
                className="flex-1 p-2 border border-gray-200 rounded-md"
                type="file"
                accept=".jpeg, .jpg, .png, .gif"
                multiple 
              />
              <input
                ref={daysRef}
                className="flex-1 p-2 border border-gray-200 rounded-md"
                type="number"
                placeholder="Expected Days*"
              />
            </div>

            <textarea
              ref={descriptionRef}
              className="w-full p-2 border border-gray-200 rounded-md"
              placeholder="Description*"
            ></textarea>

            <div className="flex space-x-4">
              <input
                ref={amountRef}
                className="flex-1 p-2 border border-gray-200 rounded-md"
                type="number"
                placeholder="Expected Amount*"
              />
              <textarea
                ref={featuresRef}
                className="flex-1 p-2 border border-gray-200 rounded-md"
                placeholder="Features*"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center">
            {currenterror && (<span className="text-red-500 text-lg justify-center text-center">{currenterror}</span>)}
          </div>

          <button
            type="submit"
            className="mt-4 w-full p-2 bg-green-600 text-white font-semibold text-sm rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPostForm;
