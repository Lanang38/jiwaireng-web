import { Layout } from "../layout/layout";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import profileImage from "../assets/zee.webp";

export const Profile = () => {
  const [fullName, setFullName] = useState("Azizi Asadel");
  const [handphone, setHandphone] = useState("0887665212");
  const [email, setEmail] = useState("AziziAsadel@gmail.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordUpdate = () => {
    if (oldPassword && newPassword) {
      alert("Password updated successfully!");
      setIsPasswordModalOpen(false);
    } else {
      alert("Please fill in both fields!");
    }
  };

  const handleImageUpdate = () => {
    alert("Image updated successfully!");
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center pt-56 bg-gray-100">
        <div className="p-8 max-w-3xl w-full bg-white rounded-lg shadow-lg">
          {/* Card Container */}
          <div className="flex items-center">
            {/* Foto Profil Besar */}
            <div className="w-1/3 pr-8">
              <img
                src={profileImage}
                alt="Profile"
                className="w-52 h-52 rounded-full border-2 border-gray-300 object-cover "
              />
              <button
                className="text-primary-500 pl-3 hover:underline focus:outline-none text-xl mt-4 block"
                onClick={() => setIsModalOpen(true)}
              >
                Ganti Gambar Profil
              </button>
            </div>

            {/* Form Profil di Sebelah Kanan */}
            <div className="w-2/3">
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  disabled
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  No Handphone
                </label>
                <input
                  type="text"
                  value={handphone}
                  onChange={(e) => setHandphone(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  disabled
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  disabled
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Kata Sandi
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    className="ml-4 text-gray-500 focus:outline-none text-xl"
                  >
                    {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setIsPasswordModalOpen(true)}
                  className="px-6 py-4 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 text-xl"
                >
                  Perbarui Kata Sandi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Ganti Gambar Profil */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-96">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Ganti Gambar Profil
              </h2>
              <img
                src={profileImage}
                alt="Profile Preview"
                className="w-40 h-40 rounded-full mb-6 mx-auto border-2 border-gray-300 object-cover"
              />
              <div className="flex justify-center">
                <button
                  className="px-6 py-4 bg-primary-500 text-white font-semibold rounded-md mr-4 hover:bg-primary-600 focus:outline-none"
                  onClick={handleImageUpdate}
                >
                  Ganti
                </button>
                <button
                  className="px-6 py-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none"
                  onClick={() => setIsModalOpen(false)}
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Perbarui Kata Sandi */}
        {isPasswordModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-96">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Perbarui Kata Sandi
              </h2>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Kata Sandi Lama
                </label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Kata Sandi Baru
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>

              <div className="flex justify-end">
                <button
                  className="px-6 py-4 bg-primary-500 text-white font-semibold rounded-md mr-4 hover:bg-primary-600 focus:outline-none"
                  onClick={handlePasswordUpdate}
                >
                  Perbarui
                </button>
                <button
                  className="px-6 py-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none"
                  onClick={() => setIsPasswordModalOpen(false)}
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};