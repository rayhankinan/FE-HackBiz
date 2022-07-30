import{r as n,u as y,j as e,a as s,S as b}from"./index.510ab587.js";import{F as r}from"./index.bfaa4c96.js";import{I as a}from"./index.c43f6bc3.js";import{C as w}from"./index.57aa8ff4.js";import{S as o}from"./index.39988044.js";import{C as v}from"./index.ca37df3c.js";import{B as P}from"./button.f0a87283.js";import"./row.1a1d4273.js";import"./useFlexGapSupport.89be9474.js";import"./SearchOutlined.ddd45888.js";import"./RightOutlined.d4e29383.js";import"./pickAttrs.1ff1d595.js";const{Option:l}=o,x={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},c={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},B=()=>{const[p,i]=n.exports.useState(!0),[m,h]=n.exports.useState([]),g=y(),f=t=>{setTimeout(()=>{g("/login"),i(!1)},1e3)};return n.exports.useEffect(()=>{setTimeout(()=>{h([{value:"indonesia",label:"Indonesia"},{value:"malaysia",label:"Malaysia"},{value:"thailand",label:"Thailand"}]),i(!1)},1e3)},[m]),e("div",{className:"bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen",children:e("div",{className:"flex items-center justify-center h-auto space-x-40 pt-8",children:s("div",{className:"shadow-lg rounded-2xl bg-white p-4",style:{width:450,height:870},children:[e("img",{src:"../../../logo.png",alt:"",style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"}}),e("div",{className:" text-black font-sans text-center",children:e("p",{className:"text-4xl font-medium mt-2 mb-7 ",children:"Sign Up"})}),e(b,{tip:"Loading . . .",spinning:p,children:s(r,{...x,name:"register",onFinish:f,scrollToFirstError:!0,children:[e(r.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:e(a,{})}),e(r.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:e(a.Password,{})}),e(r.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},({getFieldValue:t})=>({validator(u,d){return!d||t("password")===d?Promise.resolve():Promise.reject(new Error("The two passwords that you entered do not match!"))}})],children:e(a.Password,{})}),e(r.Item,{name:"username",label:"Username",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your username!",whitespace:!0}],children:e(a,{})}),e(r.Item,{name:"residence",label:"Residence",rules:[{type:"array",required:!0,message:"Please select your residence!"}],children:e(w,{options:m,placeholder:"select your residence"})}),e(r.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}],children:e(a,{className:"w-full"})}),e(r.Item,{name:"gender",label:"Gender",rules:[{required:!0,message:"Please select gender!"}],children:s(o,{placeholder:"select your gender",children:[e(l,{value:"male",children:"Male"}),e(l,{value:"female",children:"Female"})]})}),e(r.Item,{name:"company",label:"Company",rules:[{required:!0,message:"Please input your company!"}],children:e(a,{className:"w-full"})}),e(r.Item,{name:"role",label:"Role",rules:[{required:!0,message:"Please select role!"}],children:s(o,{placeholder:"select your role",children:[e(l,{value:"student",children:"Student"}),e(l,{value:"business",children:"Business"})]})}),e(r.Item,{name:"agreement",valuePropName:"checked",rules:[{validator:(t,u)=>u?Promise.resolve():Promise.reject(new Error("Should accept agreement"))}],...c,children:s(v,{children:["I have read the ",e("a",{href:"#",children:"agreement"})]})}),e(r.Item,{...c,children:e(P,{type:"primary",htmlType:"submit",className:"text-black",children:"Sign Up"})})]})})]})})})};export{B as Register};
