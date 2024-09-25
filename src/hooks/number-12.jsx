import { useEffect } from "react";
import { useState } from "react";
// 12
export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 px-4 py-2 text-white rounded mb-4"
      >
        Click Me
      </button>
      <p>{count}</p>
    </div>
  );
};
// 11
export const ProductCard = ({ id }) => {
  const [something, setSomething] = useState("blablabla");
  useEffect(() => {}, [something]);
  return (
    <div>
      {!id
        ? "No id provided!"
        : {
            /*Product Card*/
          }}
    </div>
  );
};
// 10
export const User = () => {
  const [user, setUser] = useState({ name: "", city: "", age: 50 });
  console.log(user);
  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };
  return (
    <form>
      <input type="text" onChange={handleChange} placeholder="Name" />
    </form>
  );
};
// 9
export const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    zipCode: "",
  });
  handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form className="flex flex-col gap-y-2">
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="First Name"
        className="px-4 py-2"
      />
      <br />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        placeholder="Last Name"
        className="px-4 py-2"
      />
      <br />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className="px-4 py-2"
      />
      <br />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        className="px-4 py-2"
      />
      <br />
      <input
        type="text"
        name="address"
        onChange={handleChange}
        placeholder="Address"
        className="px-4 py-2"
      />
      <br />
      <input
        type="text"
        name="zipCode"
        onChange={handleChange}
        placeholder="Zip Code"
        className="px-4 py-2"
      />
      <br />
    </form>
  );
};
// 8
const PRICE_PER_ITEM = 5;
export const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = quantity * PRICE_PER_ITEM;

  // const [totalPrice,setTotalPrice] = useState(0);
  // useEffect(()=>{
  //     setTotalPrice(quantity*PRICE_PER_ITEM);
  // },[quantity]);
  const handleClick = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 px-4 py-2 text-white rounded"
      >
        Add 1 item
      </button>
      <p>"Total Price: "{totalPrice}</p>
    </div>
  );
};
// 7
export const Price = () => {
  console.log("Component rendering...");
  const [price, setPrice] = useState(0);
  const [price2, setPrice2] = useState({
    number: 1,
    totalPrice: true,
  });
  useEffect(() => {}, [price.name]); // use primitive value to prevent unnecessary running of useEffect
  const handleClick = () => {
    setPrice(0);
  };
  const handleClick2 = () => {
    setPrice2({
      number: 1,
      totalPrice: true,
    });
  };
  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500 py-2 px-4">
        Click Me
      </button>
      <button onClick={handleClick2} className="bg-blue-500 py-2 px-4">
        Click Me2
      </button>
    </div>
  );
};
// 6
export const Blog = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);
  return (
    <article>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </article>
  );
};
// 5
// 4
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1920);
  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return windowSize;
};
export const ExampleComponent1 = () => {
  const windowSize = useWindowSize();
  return <div>Component 1</div>;
};
export const ExampleComponent2 = () => {
  const windowSize = useWindowSize();
  return <div>Component 2</div>;
};
// 2 Closure
export const CounterExample = () => {
  const [count, setCount] = useState(0);
  // useEffect(()=>{
  //     const i = setInterval(()=>{
  //         console.log('Interval is running...');
  //         setCount(count+1);
  //     });

  //     return () =>{
  //         clearInterval(i);
  //     }
  // },[count])
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return <p>Count is: {count}</p>;
};

// 1 Fetching in UseEffect
export const Post = () => {
  const [id, setId] = useState(1);
  return (
    <div>
      <button
        onClick={() => setId(Math.floor(Math.random * 100))}
        className="bg-blue-500 px-4 py-2 text-white rounded mr-2"
      >
        Show me a different post
      </button>
      <PostBody id={id} />
    </div>
  );
};
export const PostBody = ({ id }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://dummyjson.com/posts/${id}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setText(data.body));

    return () => controller.abort();
  }, []);
  return <p>{text}</p>;
};
