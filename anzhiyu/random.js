var posts=["2023/11/14/My-new-Post/","2023/11/14/如何解决spring中的循环依赖/","2023/11/14/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };