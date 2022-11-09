// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    // const item = props.item;
    // const updateCart = props.updateCart;
    // const cart = props.cart;
    const {item, updateCart, cart} = props;
    const handleClick = () => {
        // do stuff
        console.log(`clicked ${item.name}`)
        updateCart([...cart, item]);
    }

    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}

// SUBMIT: tinyurl.com/mc-react
