const DashboardHome = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Welcome : SAURAV KUMAR</h2>

      <div className="grid md:grid-cols-3 gap-5">
        <div
          className="p-6 rounded-xl bg-gradient-to-r from-blue-300 to-cyan-300 
            shadow-[6px_6px_14px_#b7bfd7,-6px_-6px_14px_#ffffff] 
            hover:scale-[1.03] transition cursor-pointer"
        >
          <div className="text-3xl mb-2">🆔</div>
          <h3 className="text-lg font-bold">Generated</h3>
          <p className="text-sm text-gray-700">ID Card</p>
        </div>

        <div
          className="p-6 rounded-xl bg-gradient-to-r from-purple-300 to-blue-300 
            shadow-[6px_6px_14px_#b7bfd7,-6px_-6px_14px_#ffffff] 
            hover:scale-[1.03] transition cursor-pointer"
        >
          <div className="text-3xl mb-2">📄</div>
          <h3 className="text-lg font-bold">Generated</h3>
          <p className="text-sm text-gray-700">Appointment Letter</p>
        </div>

        <div
          className="p-6 rounded-xl bg-gradient-to-r from-pink-300 to-purple-300 
            shadow-[6px_6px_14px_#b7bfd7,-6px_-6px_14px_#ffffff] 
            hover:scale-[1.03] transition cursor-pointer"
        >
          <div className="text-3xl mb-2">❌</div>
          <h3 className="text-lg font-bold">Not Paid</h3>
          <p className="text-sm text-gray-700">Membership Payment</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
