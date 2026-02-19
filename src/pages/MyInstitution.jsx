function MyInstitution() {
  return (
    <div className="institution-wrapper">
      <div className="institution-card">
        {/* LEFT IMAGE */}
        <div className="institution-image">
          <img src="/AISHA.webp" alt="student" />``
        </div>

        {/* RIGHT DETAILS */}
        <div className="institution-details">
          <h2 className="institution-name">AISHA KHAN</h2>

          <div className="institution-row">
            <div className="label">Student status</div>
            <div>:</div>
            <div className="value">
              <span className="status-badge">Active</span>
            </div>
          </div>

          <div className="institution-row">
            <span className="label">Admission No.</span>
            <span className="value">E22CSEU1606</span>
          </div>

          <div className="institution-row">
            <span className="label">Admission Year</span>
            <span className="value">2022-2023</span>
          </div>

          <div className="institution-row">
            <span className="label">Roll No.</span>
            <span className="value">E22CSEU1606</span>
          </div>

          <div className="institution-row">
            <span className="label">Degree</span>
            <span className="value">Undergraduate</span>
          </div>

          <div className="institution-row">
            <span className="label">Department</span>
            <span className="value">
              School of Computer Science Engineering & Technology
            </span>
          </div>

          <div className="institution-row">
            <span className="label">Semester</span>
            <span className="value">Semester - 8</span>
          </div>

          <div className="institution-row">
            <span className="label">Course Name</span>
            <span className="value">
              Bachelor of Technology (Computer Science and Engineering)
            </span>
          </div>

          <div className="institution-row">
            <span className="label">College</span>
            <span className="value">Bennett University</span>
          </div>

          <div className="institution-row">
            <span className="label">Curriculum Plan</span>
            <span className="value">B.Tech CSE Full Stack</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInstitution;
