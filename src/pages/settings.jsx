import { Layout } from "../layout/layout";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import profileImage from "../assets/zee.webp";

export const Setting = () => {
  const [profile, setProfile] = useState("");
  const [fullName, setFullName] = useState("Azizi Asadel");
  const [handphone, setHandphone] = useState("0887665212");
  const [email, setEmail] = useState("AziziAsadel@gmail.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal for profile image update
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false); // Modal for password update
  const [oldPassword, setOldPassword] = useState(""); // Old password
  const [newPassword, setNewPassword] = useState(""); // New password

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
      <div>
        <div className="p-8 max-w-2xl mx-auto min-h-screen">
          {/* Profile Information Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <div className="flex items-center mb-6">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover mr-6"
              />
              <div>
                <h2 className="text-3xl font-semibold">{fullName}</h2>
                <button
                  className="text-primary-500 hover:underline focus:outline-none"
                  onClick={() => setIsModalOpen(true)} // Open image modal
                >
                  Ganti Gambar Profil
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                No Handphone
              </label>
              <input
                type="text"
                value={handphone}
                onChange={(e) => setHandphone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Kata Sandi
              </label>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setIsPasswordModalOpen(true)} // Open password update modal
                className="px-4 py-2 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
              >
                Perbarui Kata Sandi
              </button>
            </div>
          </div>

          {/* Modal Ganti Gambar Profil */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Ganti Gambar Profil
                </h2>
                <img
                  src={profileImage}
                  alt="Profile Preview"
                  className="w-32 h-32 rounded-full mb-4 mx-auto border-2 border-gray-300 object-cover"
                />
                <div className="flex justify-center">
                  <button
                    className="px-4 py-2 bg-primary-500 text-white font-semibold rounded-md mr-2 hover:bg-primary-600 focus:outline-none"
                    onClick={handleImageUpdate} // Replace with upload logic
                  >
                    Ganti
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none"
                    onClick={() => setIsModalOpen(false)} // Close modal
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
              <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Perbarui Kata Sandi
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Kata Sandi Lama
                  </label>
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Kata Sandi Baru
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-primary-500 text-white font-semibold rounded-md mr-2 hover:bg-primary-600 focus:outline-none"
                    onClick={handlePasswordUpdate}
                  >
                    Perbarui
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none"
                    onClick={() => setIsPasswordModalOpen(false)} // Close modal
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};