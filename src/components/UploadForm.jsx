import React, { useState } from "react";
import axios from "axios";

const API_URL =
	"https://file-sharing-backend-production.up.railway.app/api/v1/files/upload";

const UploadForm = () => {
	const [userUploadedFile, setUserUploadedFile] = useState(null);
	const [password, setPassword] = useState("");
	const [shareURL, setShareURL] = useState("");
	const handleUpload = async () => {
		const formData = new FormData();
		formData.append("file", userUploadedFile);
		formData.append("password", password);
		await axios
			.post(API_URL, formData)
			.then((response) => {
				console.log(response);
				setShareURL(response.data);
			})
			.catch((error) => {
				console.log(error);
				alert(error);
			});
	};
	return (
		<div className="upload-form quicksand-regular">
			<div className="upload-heading quicksand-bold heading">UPLOAD FILE</div>
			<div className="upload-desc sub-body">
				Maximum File Size is 10MB, Upload to get a Shareable Link to download
				the stored file
			</div>
			<div className="flex-hor">
				<div className="flex-vert">
					<label htmlFor="fileInput" className="quicksand-bold">
						File
					</label>
					<input
						className="file-input"
						id="fileInput"
						type="file"
						onChange={(e) => setUserUploadedFile(e.target.files[0])}
					/>
				</div>
				<div className="flex-vert">
					<label htmlFor="uploadPwd" className="quicksand-bold">
						Password
					</label>
					<input
						className="upload-password input-field"
						id="uploadPwd"
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</div>
			<button
				className="upload-btn primary-btn quicksand-bold"
				type="submit"
				onClick={handleUpload}
			>
				Get Shareable Link
			</button>
			<p className="quicksand-bold">{shareURL}</p>
		</div>
	);
};

export default UploadForm;
