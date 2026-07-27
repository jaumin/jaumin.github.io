const F=`基本概念|ESG|環境、社會、治理三個面向
基本概念|SDGs|聯合國 2030 永續發展目標，共 17 項
基本概念|MDGs|千禧年發展目標，共 8 項
基本概念|淨零排放|人為排放量與人為移除量達到平衡
基本概念|減緩|降低排放或增加碳匯以減少氣候變遷
基本概念|調適|調整系統以降低氣候衝擊造成的損害
基本概念|碳費|使排放者負擔溫室氣體排放成本
基本概念|排放交易|透過總量管制與排放權交易達成減量
基本概念|內部碳定價|企業自願設定內部碳價格納入決策
基本概念|循環經濟|減量、再使用、維修、回收以延長資源價值
資訊揭露|GRI|著重組織對經濟、環境與人的重大影響
資訊揭露|ISSB|提供影響投資人決策的永續相關財務資訊
資訊揭露|IFRS S1|永續相關財務資訊揭露的一般要求
資訊揭露|IFRS S2|氣候相關揭露，建立在 TCFD 架構上
資訊揭露|TCFD|氣候相關財務揭露架構
資訊揭露|TCFD 四大核心|治理、策略、風險管理、指標與目標
資訊揭露|雙重重大性|同時考量企業價值影響與企業外部影響
資訊揭露|第三方確信|獨立專業人員對永續資訊提出確信結論
風險治理|實體風險|極端天氣或長期氣候變化造成的損害
風險治理|轉型風險|政策、法規、技術、市場與聲譽變化造成的風險
風險治理|環境風險|與氣候、污染、資源和生物多樣性相關
風險治理|社會風險|與人權、勞動、安全、社區及供應鏈相關
風險治理|治理風險|與董事會、誠信、內控、法遵及透明度相關
風險治理|利害關係人|受組織影響或能影響組織的個人或群體
風險治理|人權盡職調查|辨識、預防、減輕及補救人權負面影響
風險治理|誠信經營|以誠實、透明、守法原則經營並防止貪腐
永續金融|永續金融|將 ESG 因素納入金融決策
永續金融|綠色金融 1.0|著重環境面向與綠能投融資
永續金融|綠色金融 2.0|擴及 ESG 並強化氣候風險管理
永續金融|綠色金融 3.0|聚焦淨零轉型、減碳與碳排資訊揭露
永續金融|綠色金融 4.0|以轉型金融為重點
永續金融|綠色債券|資金專用於符合資格的綠色計畫或資產
永續金融|社會責任債券|資金專用於產生正面社會效益的計畫
永續金融|永續連結債券|條件與發行人的永續績效目標連結，不限資金用途
永續金融|轉型金融|為可信減碳路徑提供資金
永續金融|漂綠|誇大、模糊或誤導性的環保或永續宣稱
永續金融|範疇一|組織擁有或控制排放源的直接排放
永續金融|範疇二|購買能源所產生的間接排放
永續金融|範疇三|價值鏈上游與下游的其他間接排放
重點統整|數字總整理|SDGs 17 項、MDGs 8 項、我國 2050 淨零
重點統整|準則辨識|GRI 看影響、ISSB 看投資人、TCFD 看氣候財務
重點統整|減緩與調適|減緩處理原因；調適處理衝擊
重點統整|實體與轉型|實體來自氣候；轉型來自低碳制度改變
重點統整|債券辨識|綠色與社會債看資金用途；永續連結債看績效
重點統整|答題限制詞|先圈出最適當、主要、不包括、僅等限制詞
重點統整|錯題複習|依不熟、混淆、粗心標記錯因並反覆練習`.split('\n').map(x=>x.split('|'));
const T=['全部',...new Set(F.map(x=>x[0]))],M=['定義回想','關鍵辨識','反向提問','核心目的','考前快問','選項辨錯','情境判讀','概念連結','一句話複述','理解確認','重點抓取','快速自測','易混淆辨識','應試提示','關鍵字回想','最後複習','基礎確認','進階辨識','考場判讀','換句話說','核心記憶','名詞比對','考點檢核','提醒卡','口訣回想'];
const cards=F.flatMap((f,n)=>Array.from({length:25},(_,i)=>({t:f[0],n,mode:M[i],q:`【${M[i]}】${i%3===0?`「${f[1]}」是什麼？`:i%3===1?`哪個概念最符合「${f[2]}」？`:`請說明「${f[1]}」的核心考點。`}`,a:`${f[1]}：${f[2]}`})));
const bank=F.flatMap((f,n)=>Array.from({length:25},(_,i)=>({t:f[0],n,q:`【${M[i]}】${i%3===0?`下列何者最符合「${f[1]}」？`:i%3===1?`看到「${f[2]}」，最應聯想到哪個概念？`:`關於「${f[1]}」，下列何者正確？`}`,a:f[2],e:`考點是「${f[1]}」：${f[2]}`})));
const $=x=>document.querySelector(x);let set=cards,ci=0,topic='全部',round=[];function filters(id,fn){$(id).innerHTML=T.map((x,i)=>`<button class="${i?'':'active'}" data-x="${x}">${x}</button>`).join('');$(id).querySelectorAll('button').forEach(b=>b.onclick=()=>{[...$(id).children].forEach(x=>x.classList.remove('active'));b.classList.add('active');fn(b.dataset.x)})}function card(){let x=set[ci];$('#cardNo').textContent=`${x.t}・${x.mode}・${ci+1}/${set.length}`;$('#cardQ').textContent=x.q;$('#cardA').textContent=x.a;$('#count').textContent=`${ci+1} / ${set.length}`;$('#card').classList.remove('flipped')}filters('#cardFilters',x=>{set=x==='全部'?cards:cards.filter(a=>a.t===x);ci=0;card()});card();$('#card').onclick=()=>$('#card').classList.toggle('flipped');$('#prev').onclick=()=>{ci=(ci+set.length-1)%set.length;card()};$('#next').onclick=()=>{ci=(ci+1)%set.length;card()};function sh(a){return [...a].sort(()=>Math.random()-.5)}function fresh(){let b=topic==='全部'?bank:bank.filter(x=>x.t===topic);round=sh(b).slice(0,20).map(q=>{let w=sh(F.filter((_,i)=>i!==q.n).map(x=>x[2])).slice(0,3);return {...q,o:sh([q.a,...w])}});$('#quizBox').innerHTML=round.map((q,i)=>`<article class="question"><label>${q.t}</label><h3>${i+1}. ${q.q}</h3>${q.o.map((x,j)=>`<label class="option"><input name="q${i}" type="radio" value="${j}"> ${'ABCD'[j]}. ${x}</label>`).join('')}</article>`).join('');$('#result').innerHTML=''}filters('#quizFilters',x=>{topic=x;fresh()});fresh();$('#newSet').onclick=fresh;$('#submit').onclick=()=>{let s=0,r='';round.forEach((q,i)=>{let v=+$(`input[name=q${i}]:checked`)?.value,ok=q.o[v]===q.a;s+=ok;r+=`<div class="answer ${ok?'ok':'no'}"><b>${i+1}. ${ok?'答對':'答錯'}｜正解：${'ABCD'[q.o.indexOf(q.a)]}</b><br>${q.e}</div>`});$('#result').innerHTML=`<h2>本回得分 ${s} / 20</h2><p>答錯的概念建議立即切換到速記卡，使用不同提示再回想一次。</p>`+r};function showTab(x){document.querySelectorAll('.tab,nav button').forEach(a=>a.classList.remove('active'));$('#'+x).classList.add('active');$(`[data-tab="${x}"]`).classList.add('active');$('#bar').style.width={summary:'25%',cards:'60%',quiz:'100%'}[x];window.scrollTo({top:0,behavior:'smooth'})}document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>showTab(b.dataset.tab));
