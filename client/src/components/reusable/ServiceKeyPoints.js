import React from "react";
import "../../styles/serviceKeyPoints.css";

function ServiceKeyPoints({ keypoints }) {
  return (
    <div id="serviceKeyPoints" className="serviceKeyPoints feature">
      <div className="key-points-grid">
        {keypoints &&
          keypoints.map((keypoint) => (
            <div className="key-point">
              <div className="Icon">
                <img src={keypoint.icon} alt="keypoint1" />
              </div>
              <p className="title">{keypoint.title}</p>
              <p className="description">{keypoint.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ServiceKeyPoints;
