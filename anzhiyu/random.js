var posts=["2023/11/17/BOM与DOM/","2023/11/27/HotSpot-虚拟机对象详解/","2024/01/02/JUC（一）：进程与线程/","2023/11/22/JVM内存模型详解/","2023/11/26/Minor-GC、Major-GC和Full-GC的区别/","2023/11/26/OOM如何解决/","2023/12/21/OpenFeign-服务调用/","2023/12/20/Spring-Cloud-整合-nacos/","2023/12/27/SpringBoot全局异常处理器/","2023/12/27/SpringBoot日期格式化处理/","2023/12/26/SpringCloud网关Gateway/","2023/11/25/String-StringBuffer-StringBuilder的区别/","2023/11/15/css常用样式/","2023/11/19/hashmap是如何解决hash冲突的？/","2023/11/14/hello-world/","2023/11/15/html知识点整理/","2023/11/21/java类加载过程/","2023/12/01/jvm性能调优/","2023/12/16/spring-boot自动配置原理/","2023/11/29/垃圾回收篇：垃圾回收器/","2023/11/14/如何解决spring中的循环依赖/","2023/11/28/垃圾回收篇：垃圾回收算法/","2023/11/24/深入理解字符串常量池/","2023/12/07/操作系统知识点总结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };