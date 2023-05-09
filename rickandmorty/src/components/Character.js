function Character({ name, image, origin }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} width="300" />
      <p>{`Origin: ${origin && origin.name}`}</p>
    </div>
  );
}

export default Character;
