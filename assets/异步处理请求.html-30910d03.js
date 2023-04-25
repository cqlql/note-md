const t=JSON.parse('{"key":"v-7e6a5900","path":"/DotNet/WebApi/%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86%E8%AF%B7%E6%B1%82.html","title":"","lang":"zh-CN","frontmatter":{"description":"说明 asp.net 处理请求，会通过线程池线程处理，所以本身就是异步的。 但依然支持 async 控制器写法: 请求进来，抓取线程池线程处理请求，再抓取一个线程池线程开始处理工作任务，释放处理请求的线程，工作完成了再抓取线程来完成请求。 这里处理请求用了两个线程，等于任务给了另一个线程池线程来完成，多了个转换开销，所以不推荐使用 Task.Run 代...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/DotNet/WebApi/%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86%E8%AF%B7%E6%B1%82.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"说明 asp.net 处理请求，会通过线程池线程处理，所以本身就是异步的。 但依然支持 async 控制器写法: 请求进来，抓取线程池线程处理请求，再抓取一个线程池线程开始处理工作任务，释放处理请求的线程，工作完成了再抓取线程来完成请求。 这里处理请求用了两个线程，等于任务给了另一个线程池线程来完成，多了个转换开销，所以不推荐使用 Task.Run 代..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-25T09:22:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Joly"}],["meta",{"property":"article:modified_time","content":"2022-12-25T09:22:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-25T09:22:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1671960178000,"updatedTime":1671960178000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.96,"words":288},"filePathRelative":"DotNet/WebApi/异步处理请求.md","localizedDate":"2022年12月25日","autoDesc":true}');export{t as data};
