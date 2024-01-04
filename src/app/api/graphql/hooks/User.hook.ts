import mercury from "@mercury-js/core";

mercury.hook.before("CREATE_USER_RECORD", async function (this: any) {
  //modify data before create
  this.data.name = "Test 1";
  // mercury.cache.set("test", "Test 2");
  // this.data.test = "Test 3";
});

mercury.hook.after("CREATE_USER_RECORD", async function (this: any, args: any) {
  console.log("Here");
  console.log("AFTER CREATE hook", this);
});

mercury.hook.before("UPDATE_USER_RECORD", function (this: any) {
  console.log("BEFORE UPDATE hook", this);
});

mercury.hook.after("UPDATE_USER_RECORD", function (this: any) {
  console.log("Here");

  console.log("AFTER UPDATE hook", this);
});

mercury.hook.before("DELETE_USER_RECORD", function (this: any) {
  console.log("BEFORE DELETE hook", this);
});

mercury.hook.after("DELETE_USER_RECORD", function (this: any) {
  console.log("Here");

  console.log("AFTER DELETE hook", this);
});
