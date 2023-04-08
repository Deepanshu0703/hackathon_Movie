import Card from "./CardBoot";
function List(props) {
  return (
    <div className="row">
      {props.items.map((item) => (
        <Card
          id={item.id}
          title={item.title}
          img={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
}
export default List;
