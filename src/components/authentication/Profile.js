import React, { useState } from "react"
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../../context/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout} = useAuth()
  const history = useHistory()

async function handleLogout() {
  setError("")

  try {
    await logout()
    history.push("/login")
  } catch {
    setError("Failed to log out")
  }
}

return (
  <>
    <Container className="d-flex aling-item-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <img src={currentUser.photoURL} />
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <h5><strong>Email:</strong> {currentUser.email}</h5>
            <h5><strong>User Name:</strong> {currentUser.displayName}</h5>
            <h5><strong>Phone Number:</strong> {currentUser.phoneNumber}</h5>
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
          </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
        </Button>
        </div>
      </div>
    </Container>
  </>
)
}