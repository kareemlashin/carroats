//file
<div class="upload-btn-wrapper">
  <button class="btn">Upload a file</button>
  <input type="file" name="myfile" />
</div>
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}


////checkbox2
/* This css is for normalizing styles. You can skip this. */
*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}




.new {
  padding: 50px;
}

.form-group {
  display: block;
  margin-bottom: 15px;
}

.form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.form-group label {
  position: relative;
  cursor: pointer;
}

.form-group label:before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #0079bf;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
}

.form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
<div class="new">
  <form>
    <div class="form-group">
      <input type="checkbox" id="html">
      <label for="html">HTML</label>
    </div>
    <div class="form-group">
      <input type="checkbox" id="css">
      <label for="css">CSS</label>
    </div>
    <div class="form-group">
      <input type="checkbox" id="javascript">
      <label for="javascript">Javascript</label>
    </div>
  </form>
</div>

//checkbox
<form>
  <input type="checkbox" id="fruit1" name="fruit-1" value="Apple">
  <label for="fruit1">Apple</label>
  <input type="checkbox" id="fruit2" name="fruit-2" value="Banana" disabled>
  <label for="fruit2">Banana</label>
  <input type="checkbox" id="fruit3" name="fruit-3" value="Cherry" checked disabled>
  <label for="fruit3">Cherry</label>
  <input type="checkbox" id="fruit4" name="fruit-4" value="Strawberry">
  <label for="fruit4">Strawberry</label>
</form>
input[type=checkbox] + label {
  display: block;
  margin: 0.2em;
  cursor: pointer;
  padding: 0.2em;
}

input[type=checkbox] {
  display: none;
}

input[type=checkbox] + label:before {
  content: "\2714";
  border: 0.1em solid #000;
  border-radius: 0.2em;
  display: inline-block;
  width: 1em;
  height: 1em;
  padding-left: 0.2em;
  padding-bottom: 0.3em;
  margin-right: 0.2em;
  vertical-align: bottom;
  color: transparent;
  transition: .2s;
}

input[type=checkbox] + label:active:before {
  transform: scale(0);
}

input[type=checkbox]:checked + label:before {
  background-color: MediumSeaGreen;
  border-color: MediumSeaGreen;
  color: #fff;
}

input[type=checkbox]:disabled + label:before {
  transform: scale(1);
  border-color: #aaa;
}

input[type=checkbox]:checked:disabled + label:before {
  transform: scale(1);
  background-color: #bfb;
  border-color: #bfb;
}

//circle progress

.pie-wrapper {display:inline-block;position:relative;display:inline-block;width:200px;height:200px;margin:10px;border:10px  solid #ddd;border-radius:50%}
.pie-wrapper .pie {clip:rect(0,200px,200px,100px);height:200px;position:absolute;width:200px;margin:-10px 0 0 -10px}
.pie-wrapper .pie .half-circle {border:10px solid #3498db;clip:rect(0,100px,200px,0);height:200px;position:absolute;width:200px;border-radius:50%}
.pie-wrapper .label{position:absolute;top:5%;left:5%;display:block;width:180px;height:180px;color:#7f8c8d;cursor:default;font-size:3em;line-height:3em;text-align:center;border-radius:50%}
.pie-wrapper .label em {padding-bottom:20px;color:#bdc3c7;font-size:.45em;vertical-align:super;font-style:normal}
.pie-wrapper .shadow {width:100%;height:100%;border:20px solid #bdc3c7;border-radius: 50%}
.pie-wrapper.progress-half .pie .right-side {display: none}
.pie-wrapper.progress-half .pie .half-circle {border-style:solid;border-image:-webkit-linear-graident(#ff0000, #ffff00)}
.pie-wrapper.progress-half .pie .left-side,.pie-wrapper.progress-full .pie .left-side {-webkit-transform: rotate(165deg);-moz-transform: rotate(165deg);transform: rotate(165deg)}
.pie-wrapper.progress-full .pie .left-side{-webkit-transform: rotate(180deg);-moz-transform: rotate(180deg);transform: rotate(180deg)}
.pie-wrapper.progress-full .pie{clip:inherit}
.pie-wrapper.progress-full .pie .right-side {display:block}
.pie-wrapper.progress-full .pie .right-side{-webkit-transform: rotate(300deg);-moz-transform: rotate(300deg);transform: rotate(300deg)}
div,div:before,div:after {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box}
html,body {background: #ecf0f1;  color: #444;font-family: Tahoma, Geneva, sans-serif;font-size: 16px}

<div class="pie-wrapper progress-full">
  <span class="label">83<em>%</em></span>
  <div class="pie">
    <div class="left-side half-circle"></div>
    <div class="right-side half-circle"></div>
  </div>  
</div>

//progress
.progress {
  margin:20px auto;
  padding:0;
  width:90%;
  height:30px;
  overflow:hidden;
  background:#e5e5e5;
  border-radius:6px;
}

.bar {
	position:relative;
  float:left;
  min-width:1%;
  height:100%;
  background:cornflowerblue;
}

.percent {
	position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  margin:0;
  font-family:tahoma,arial,helvetica;
  font-size:12px;
  color:white;
}
<div class="progress">
	<div class="bar" style="width:35%">
		<p class="percent">35%</p>
	</div>
</div>
//select 
    <div class="styled-select">
		<select>
			<option selected>Select</option>
			<option>Option</option>
			<option>Longer Option</option>
			<option>An Even Longer Option</option>
		</select>
		<div class="select-button"><div class="select-button-text"><span>V</span></div></div>
	</div>

	.styled-select {
	  position:relative; 
	  border:solid 1px #888888; 
	  overflow:hidden; 
	  display:block; 
	  width:12em; 
	  margin:auto; 
	  font-size:1em; /*use this to scale the select*/
	}


	.styled-select select {
	  width:100%;
	  font-size: .9em;
	  height: 2em;
	  margin: 0;
	  background: rgb(0, 0, 27); /*IE Fallback*/
	  background: rgba(0, 0, 27, 0);
	  color:#888;
	  border:none;
	  outline:none;
	  display: inline-block;
	  -webkit-appearance:none;
	  -moz-appearance:none;
	  appearance:none;
	  cursor:pointer;
	}
	
	.styled-select select option {
		background-color: #fff;
	}

	.styled-select .select-button {
	  background-color:blue;
	  right:0; top:0;
	  position:absolute;
	  pointer-events:none;
	  /*text-align: center; vertical-align: middle; */
	  width: 2em; height: 1.8em;
	}
	
	.styled-select .select-button .select-button-text {
		color: red;
		line-height: 1.8em;
		text-align: center;
		display: block;
	}
	
	.styled-select .select-button .select-button-text span{
		font-size; 1em;
	}


	.small-arrow-down {
		width: 0; 	
		height: 0; 	 
		border-left: .4em solid transparent; 
		border-right: .4em solid transparent; 
		border-top: .4em solid #fff; 
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	.lt-ie10 .styled-select {
		background: red;
		border: none;
	}
	
	.lt-ie10 .styled-select .select-button {
		display: none;
	}