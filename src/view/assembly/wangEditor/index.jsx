/** @format */

import { Alert } from "antd";
import React, { memo } from "react";

const WangEditor = memo(() => {
  return (
    <div>
      <Alert
        message={`动态表单 🍓🍓🍓🍇🍇🍇
表单页用于向用户动态收集信息。`}
        type="info"
      />
    </div>
  );
});

export default WangEditor;
