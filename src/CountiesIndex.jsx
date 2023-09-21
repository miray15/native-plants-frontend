export function CountiesIndex(props) {
  return (
    <div>
      <h1>All Counties</h1>
      {props.counties.map((county) => (
        <div key={county.id}>
          <h2>{county.name}</h2>
        </div>
      ))}
    </div>
  );
}
