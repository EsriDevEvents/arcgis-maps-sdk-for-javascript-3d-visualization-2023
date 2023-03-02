import{i as p}from"./executionError-fb3f283a.js";import{b as D,D as u,Z as k,F as A}from"./datetime-eed49b9b.js";class m{}var y;m.instance=new D("Etc/UTC"),function(r){r.TimeZoneNotRecognised="TimeZoneNotRecognised"}(y||(y={}));const O={[y.TimeZoneNotRecognised]:"Timezone identifier has not been recognised."};class g extends Error{constructor(e,t){super(p(O[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,g)}}class n{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(e=0,t=1,s=1,Z=0,a=0,o=0,d=0,N){if(isNaN(e)||isNaN(t)||isNaN(s)||isNaN(Z)||isNaN(a)||isNaN(o)||isNaN(d))return null;let c=0;const S=u.local(e,t).daysInMonth;s<1&&(c=s-1,s=1),s>S&&(c=s-S,s=S);let h=0;t>12?(h=t-12,t=12):t<1&&(h=t-1,t=1);let l=0;a>59?(l=a-59,a=59):a<0&&(l=a,a=0);let f=0;o>59?(f=o-59,o=59):o<0&&(f=o,o=0);let T=0;d>999?(T=d-999,d=999):d<0&&(T=d,d=0);let i=u.fromObject({day:s,year:e,month:t,hour:Z,minute:a,second:o,millisecond:d},{zone:w(N)});return h!==0&&(i=i.plus({months:h})),c!==0&&(i=i.plus({days:c})),l!==0&&(i=i.plus({minutes:l})),f!==0&&(i=i.plus({seconds:f})),T!==0&&(i=i.plus({milliseconds:T})),new n(i)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,t){const s=w(t);return e.isUnknownTimeZone||s===m.instance?n.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,s):new n(e._date.setZone(t))}static dateJSToArcadeDate(e){return new n(u.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){return new n(u.fromJSDate(e,{zone:t}))}static unknownEpochToArcadeDate(e){return new n(u.fromMillis(e,{zone:m.instance}))}static unknownDateJSToArcadeDate(e){return n.arcadeDateAndZoneToArcadeDate(n.dateJSToArcadeDate(e),m.instance)}static epochToArcadeDate(e,t="system"){return new n(u.fromMillis(e,{zone:t}))}static dateTimeToArcadeDate(e){return new n(e)}changeTimeZone(e){const t=w(e);return n.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,t){const s=w(t);return e.zone===m.instance||s===m.instance?n.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,s):new n(e.setZone(s))}static nowToArcadeDate(e){return new n(u.fromJSDate(new Date,{zone:e}))}static nowUTCToArcadeDate(){return new n(u.utc())}get isSystem(){return this.timeZone==="system"||this.timeZone===n.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===m.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown";if(this._date.zone.type==="system")return"system";const e=this.zone;return e.type==="fixed"?e.fixed===0?"utc":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new n(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toFormat(e,t){return this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLString(){return"timestamp '"+this._date.toFormat("yyyy-LL-dd HH:mm:ss")+"'"}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new n(this._date.toUTC())}toLocal(){return new n(this._date.toLocal())}toString(){return this.toISOString(!0)}}function w(r){if(r instanceof k)return r;if(r.toLowerCase()==="system")return"system";if(r.toLowerCase()==="utc")return"utc";if(r.toLowerCase()==="unknown")return m.instance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(r)){const t=A.parseSpecifier("UTC"+(r.startsWith("+")||r.startsWith("-")?"":"+")+r);if(t)return t}const e=D.create(r);if(!e.isValid)throw new g(y.TimeZoneNotRecognised);return e}export{n as c,w as u};
