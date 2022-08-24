import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,a as n,b as s}from"./app.5d3423a1.js";const l={},a={class:"language-c# ext-c# line-numbers-mode"},r=s(`<pre class="language-c#"><code>
// \u5B9A\u4E49
class WeatherForecast
{
    public DateTime Date { get; set; }

    public int TemperatureC { get; set; }

    public int TemperatureF =&gt; 32 + (int)(TemperatureC / 0.5556);

    public string Summary { get; set; }
}

// \u4F7F\u7528
// \u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5E76\u521D\u59CB\u90E8\u5206\u6210\u5458
var weather = new WeatherForecast
{
  Date = DateTime.Now,
  TemperatureC = 1,
};
Console.WriteLine(weather.Date);
Console.WriteLine(weather.TemperatureF);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div>`,2),d=[r];function c(t,v){return i(),n("div",a,d)}var b=e(l,[["render",c],["__file","class \u7C7B.html.vue"]]);export{b as default};
