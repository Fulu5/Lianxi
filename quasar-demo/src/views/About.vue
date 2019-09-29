<template>
  <q-page padding>
    <h5>请求所属行业数据</h5>
    <q-btn color="primary" icon="check" label="Request Industry" @click="requestUser" />
    <p></p>
    <div v-for="indus in industry" :key="indus.DictKey">
      <p>{{ indus.DictValue }}</p>
    </div>
    <h5>验证原始密码</h5>
    <q-input v-model="oldPassword" type="text" float-label="Float Label" placeholder="请输入原始密码" />
    <q-btn color="primary" icon="check" label="Check User Name" @click="checkPassword" />
    <p>原始密码{{}}</p>
    <div class="q-pa-md">
      <div class="q-gutter-sm">
        <q-radio v-model="shape" val="line" label="Line" />
        <q-radio v-model="shape" val="rectangle" label="Rectangle" />
        <q-radio v-model="shape" val="ellipse" label="Ellipse" />
        <q-radio v-model="shape" val="polygon" label="Polygon" />
      </div>

      <div class="q-px-sm">
        Your selection is:
        <strong>{{ shape }}</strong>
      </div>
    </div>
  </q-page>
</template>

<script>
import { chown } from "fs";
import { log } from "util";
export default {
  name: "PageAbout",
  data() {
    return {
      industry: [],
      oldPassword: "",
      shape: ""
    };
  },
  methods: {
    requestUser() {
      this.Http.get("/customer/indestry").then(res => {
        if (res.data.code === 0) {
          this.industry = res.data.data;
        } else {
          console.log("/customer/indestry请求失败，错误码：" + res.code);
        }
      });
    },
    checkPassword() {
      this.Http.put("/user/validatePassword", {
        CustomerID: 45,
        oldPassword: "9cbf8a4dcb8e30682b927f352d6559a0"
      }).then(res => {
        if (res.data.code === 0) {
          console.log("正确");
        } else {
          console.log(res.data.msg);
        }
      });
    }
  }
};
</script>
