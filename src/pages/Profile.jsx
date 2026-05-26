import Layout from "../components/Layout";

function Profile() {
  return (
    <Layout>
      <div
        style={{
          marginLeft: "260px",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h1>Profile Details</h1>

        <p>
          <strong>Name:</strong> Akhil Sai
        </p>

        <p>
          <strong>Role:</strong> Frontend Developer
        </p>

        <p>
          <strong>Email:</strong> akhil@example.com
        </p>

        <p>
          <strong>Project:</strong> AI Healthcare Ecosystem
        </p>
      </div>
    </Layout>
  );
}

export default Profile;