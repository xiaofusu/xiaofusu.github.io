var posts=["2023/11/17/BOM与DOM/","2023/11/22/JVM内存模型详解/","2023/11/25/String-StringBuffer-StringBuilder的区别/","2023/11/19/hashmap是如何解决hash冲突的？/","2023/11/15/css常用样式/","2023/11/14/hello-world/","2023/11/15/html知识点整理/","2023/11/21/java类加载过程/","2023/11/14/如何解决spring中的循环依赖/","2023/11/24/深入理解字符串常量池/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };