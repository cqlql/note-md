import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{b as i}from"./app.c5c20399.js";const n={},s=i(`<h2 id="\u5B9E\u4F53\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F53\u7C7B" aria-hidden="true">#</a> \u5B9E\u4F53\u7C7B</h2><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>
// \u5B9A\u4E49
class WeatherForecast
{
    public DateTime Date { get; set; }

    public int TemperatureC { get; set; }

    // \u53EA\u6709 get
    public int TemperatureF =&gt; 32 + (int)(TemperatureC / 0.5556);

    // \u8BBE\u7F6E\u521D\u59CB\u503C
    public string Title { get; set; } =  string.Empty;

    // \u53EF\u4E3A null
    public string? Summary { get; set; };
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function l(r,a){return s}var c=e(n,[["render",l],["__file","class \u7C7B.html.vue"]]);export{c as default};
