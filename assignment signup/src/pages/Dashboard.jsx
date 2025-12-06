function Dashboard({ user, onLogout }) {
  const galleryImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400'
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-logo">
          <div className="logo-icon">
            <span>📷</span>
          </div>
          <span className="logo-text">Canvas</span>
        </div>

        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </header>

      <main className="dashboard-content">
        <div className="welcome-section">
          <div className="welcome-icon">
            <span>👋</span>
          </div>

          <h1>Welcome, <span>{user.name}</span></h1>
          <p>
            You're now part of our photography community. Explore stunning visuals,
            share your work, and connect with fellow photographers.
          </p>

          <div className="dashboard-gallery">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="gallery-item"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

