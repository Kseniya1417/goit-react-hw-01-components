export const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(192, 192, 192)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <div
        className="profile"
        style={{
          height: '320px',
          width: '250px',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}
      >
        <div className="description">
          <img
            style={{
              paddingTop: '20px',
              height: '100px',
              borderRadius: '50%',
            }}
            src={avatar}
            alt="User avatar"
            className="avatar"
          />
          <p
            style={{
              fontSize: 18,
              fontWeight: 600,
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 10,
            }}
            className="name"
          >
            {userName}
          </p>
          <p
            style={{
              color: '#8d8d8d',
              fontSize: 14,
              marginTop: 10,
              marginBottom: 10,
            }}
            className="tag"
          >
            @{tag}
          </p>
          <p
            style={{
              color: '#8d8d8d',
              fontSize: 14,
              marginTop: 10,
              marginBottom: 20,
            }}
            className="location"
          >
            {location}
          </p>
        </div>

        <ul
          style={{
            display: 'flex',
            listStyleType: 'none',
            marginLeft: 0,
            paddingLeft: 0,
          }}
        >
          <li
            style={{
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0,
              backgroundColor: '#eaeaea',
              borderTop: '1px solid #8d8d8d',
              borderRight: '1px solid #8d8d8d',
            }}
          >
            <p className="label">Followers</p>
            <p className="quantity">
              <strong>{stats.followers}</strong>
            </p>
          </li>
          <li
            style={{
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0,
              backgroundColor: '#eaeaea',
              borderTop: '1px solid #8d8d8d',
              borderRight: '1px solid #8d8d8d',
            }}
          >
            <p className="label">Views</p>
            <p className="quantity">
              <strong>{stats.views}</strong>
            </p>
          </li>
          <li
            style={{
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0,
              backgroundColor: '#eaeaea',
              borderTop: '1px solid #8d8d8d',
            }}
          >
            <p className="label">Likes</p>
            <p className="quantity">
              <strong>{stats.likes}</strong>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
