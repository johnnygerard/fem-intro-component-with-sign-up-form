import { Form } from "@/component/form";
import { memo } from "react";

const HomePage = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <Form />
    </div>
  );
};

export default memo(HomePage);
