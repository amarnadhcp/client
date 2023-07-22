import React, { useState } from "react";

const Register = () => {
    
    const [file,setFile] = useState(null)
    const [user,setUser] = useState({
        username:"",
        email:"",
        password:"",
        img:"",
        country:"",
        isSeller:"false",
        desc:""
    })

    const handleChange = (e)=>{
        setUser((prev)=>{
            return{...prev,[e.target]:e.target.value}
        })
    }


    return (
        <div className="flex items-center justify-center">
            <form className="w-96 py-10 flex gap-20" onSubmit={handleSubmit}>
                <div className="flex-1 space-y-10">
                    <h1 className="text-gray-500 mb-5">Create a new account</h1>
                    <label className="text-gray-500" htmlFor="username">Username</label>
                    <input
                        className="px-5 py-4 border border-gray-300"
                        name="username"
                        type="text"
                        onChange={handleChange}
                    />
                    <label className="text-gray-500" htmlFor="email">Email</label>
                    <input
                        className="px-5 py-4 border border-gray-300"
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={handleChange}
                    />
                    <label className="text-gray-500" htmlFor="password">Password</label>
                    <input
                        className="px-5 py-4 border border-gray-300"
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />
                    <label className="text-gray-500" htmlFor="file">Profile Picture</label>
                    <input
                        className="border border-gray-300"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label className="text-gray-500" htmlFor="country">Country</label>
                    <input
                        className="px-5 py-4 border border-gray-300"
                        name="country"
                        type="text"
                        placeholder="USA"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="bg-green-500 px-5 py-4 text-white font-medium"
                    >
                        Register
                    </button>
                </div>
                <div className="flex-1 space-y-10">
                    <h1 className="text-gray-500 mb-5">I want to become a seller</h1>
                    <div className="flex items-center gap-5">
                        <label className="text-gray-500">Activate the seller account</label>
                        <label className="switch">
                            <input type="checkbox" onChange={handleSeller} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <label className="text-gray-500" htmlFor="phone">Phone Number</label>
                    <input
                        className="px-5 py-4 border border-gray-300"
                        name="phone"
                        type="text"
                        placeholder="+1 234 567 89"
                        onChange={handleChange}
                    />
                    <label className="text-gray-500" htmlFor="desc">Description</label>
                    <textarea
                        className="px-5 py-4 border border-gray-300"
                        placeholder="A short description of yourself"
                        name="desc"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>

    )
}


export default Register