import { useState } from "react";
import "./Emergency.css";

function Emergency() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setShowConfirm(false);
    setConfirmed(true);
  };

  return (
    <div className="emergency-page">
      <div className="emergency-card">

        {!confirmed ? (
          <>
            <div className="sos-icon">🆘</div>

            <h1>Emergency Assistance</h1>

            <p className="emergency-description">
              If you are in danger, send an SOS alert to request
              emergency assistance.
            </p>

            <button
              className="sos-button"
              onClick={() => setShowConfirm(true)}
            >
              🆘 SEND SOS ALERT
            </button>

            <p className="warning-text">
              Press only when emergency assistance is required.
            </p>
          </>
        ) : (
          <>
            <div className="success-icon">✓</div>

            <h1>SOS CONFIRMED</h1>

            <p className="emergency-description">
              Your emergency request has been activated.
            </p>

            <div className="analysis-box">
              <p>
                <strong>Location:</strong> Detecting...
              </p>

              <p>
                <strong>Cellular:</strong> Checking...
              </p>

              <p>
                <strong>LoRa:</strong> Checking...
              </p>

              <p>
                <strong>Mesh Network:</strong> Checking...
              </p>

              <p>
                <strong>Communication:</strong> Analyzing...
              </p>
            </div>

            <p className="status-text">
              AI Network Selection in progress...
            </p>
          </>
        )}

      </div>

      {/* SOS CONFIRMATION POPUP */}
      {showConfirm && (
        <div className="confirmation-overlay">
          <div className="confirmation-box">

            <div className="confirm-icon">⚠️</div>

            <h2>Confirm SOS</h2>

            <p>
              Are you sure you want to send an emergency alert?
            </p>

            <p className="small-text">
              Your location and network information will be analyzed.
            </p>

            <div className="confirmation-buttons">

              <button
                className="cancel-button"
                onClick={() => setShowConfirm(false)}
              >
                CANCEL
              </button>

              <button
                className="confirm-button"
                onClick={handleConfirm}
              >
                CONFIRM SOS
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Emergency;