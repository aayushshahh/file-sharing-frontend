import React, { useState } from "react";
import axios from "axios";

const Download = () => {
	const [password, setPassword] = useState("");
	const [downloadURL, setDownloadURL] = useState("");
	const downloadFile = async () => {
		try {
			const response = await axios.get(downloadURL, {
				params: { password },
				responseType: "blob",
			});
			const url = window.URL.createObjectURL(response.data);
			const link = document.createElement("a");
			link.href = url;
			let headerFileName = response.headers["content-disposition"]
				.split("filename=")[1]
				.trim();
			headerFileName = headerFileName
				.replace(/^"|"$/g, "")
				.replace(/^_|_$/g, "");
			console.log(headerFileName);
			link.setAttribute("download", headerFileName);
			document.body.appendChild(link);
			link.click();
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div className="download-form quicksand-regular">
			<div className="download-heading quicksand-bold heading">
				DOWNLOAD FILE
			</div>
			<div className="download-desc sub-body">
				Files stored on the server are automatically deleted after 48 hours
			</div>
			<div className="flex-hor">
				<div className="flex-vert">
					<label htmlFor="downloadPwd" className="quicksand-bold">
						Password
					</label>
					<input
						className="download-password input-field"
						type="password"
						id="downloadPwd"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="flex-vert">
					<label htmlFor="fileURL" className="quicksand-bold">
						Download URL
					</label>
					<input
						className="url-input input-field"
						type="text"
						id="fileURL"
						placeholder="Download URL"
						onChange={(e) => setDownloadURL(e.target.value)}
					/>
				</div>
			</div>
			<button
				className="download-btn quicksand-bold primary-btn"
				type="button"
				onClick={downloadFile}
			>
				Download File
			</button>
		</div>
	);
};

export default Download;
