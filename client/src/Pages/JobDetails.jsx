import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { id } = useParams();
  const job = useLoaderData();

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter Linkedin account URL",
      showCancelButton: true,
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-10">
      <div className="bg-white shadow-md rounded-lg p-8">
        {/* <PageHeader title="Single Job Page" path="single job" /> */}
        <h2 className="font-bold text-3xl text-green-500 mb-4">Job Details</h2>
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {job.jobTitle}
          </h1>
          <p className="text-gray-600 mb-4">{job.description}</p>
          <div className="text-gray-700 mb-2">
            <strong>Company:</strong> {job.companyName}
          </div>
          <div className="text-gray-700 mb-2">
            <strong>Location:</strong> {job.jobLocation}
          </div>
          <div className="text-gray-700 mb-2">
            <strong>Salary:</strong> {job.minPrice} - {job.maxPrice}{" "}
            {job.salaryType}
          </div>
          <div className="text-gray-700 mb-2">
            <strong>Employment Type:</strong> {job.employmentType}
          </div>
          <div className="text-gray-700 mb-2">
            <strong>Posted By:</strong> {job.postedBy}
          </div>
        </div>
        <h2>To apply, enter your linkedin account URL : </h2>
        <button
          className="bg-green-500 hover:bg-green-600 px-8 py-2 text-white rounded-sm transition duration-300"
          onClick={handleApply}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
