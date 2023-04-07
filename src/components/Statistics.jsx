export const Statistics = ({ title, stats }) => {
  return (
    <section
      class="statistics"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0px auto 20px',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        backgroundColor: '#fff',
      }}
    >
      {title && <h2 class="title">{title}</h2>}
      <ul
        class="stat-list"
        style={{
          display: 'flex',
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {stats.map(stat => (
          <li
            key={stat.id}
            class="item"
            style={{
              minWidth: 70,
              textAlign: 'center',
              backgroundColor: '#eaeaea',
              borderTop: '1px solid #8d8d8d',
              borderRight: '1px solid #8d8d8d',
            }}
          >
            <p class="label">{stat.label}</p>
            <p
              class="percentage"
              style={{
                fontSize: 20,
              }}
            >
              {stat.percentage}%
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
