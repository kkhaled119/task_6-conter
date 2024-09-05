import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount} style={styles.button}>
        Increase Count
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;

{
  /*
Props هي طريقة لتمرير البيانات من المكونات الأب إلى الأبناء في React.
يتم تمرير الـ props كسمات عند استدعاء المكون.
داخل المكون الابن، يمكنك الوصول إلى الـ props من خلال كائن props أو باستخدام التفكيك.
الـ props للقراءة فقط ولا يجب تعديلها داخل المكون الابن.
يمكنك تمرير أنواع مختلفة من البيانات، بما في ذلك الدوال.
استخدام PropTypes وdefaultProps يمكن أن يساعد في إدارة الـ  */
}
