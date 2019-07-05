document.addEventListener("DOMContentLoaded", init);

function init()
{
	const form = document.querySelector("#form");
	const question = document.querySelector(".question-section");
	const questionFixed = document.querySelector(".question-fixed-section");
	const questionSelect = document.querySelector("#question-number");
	const questionValue = document.querySelector("#question-value");


	for(let i=0;i<form.elements.length;i++) {
		form.elements[i].value = "";
		form.elements[i].addEventListener("keyup", () => form.elements[i].value = form.elements[i].value.toUpperCase());
	}

	const answer_db = [
		{"answer": [form.elements[0], form.elements[13], form.elements[15], form.elements[25], form.elements[27],  form.elements[36]]},
		{"answer": [form.elements[0], form.elements[1], form.elements[2], form.elements[3], form.elements[4], form.elements[5], form.elements[6], form.elements[7], form.elements[8], form.elements[9], form.elements[10], form.elements[11], form.elements[12]]},
		{"answer": [form.elements[14], form.elements[15], form.elements[16], form.elements[17], form.elements[18], form.elements[19], form.elements[20], form.elements[21], form.elements[22], form.elements[23], form.elements[24]]},
		{"answer": [form.elements[26], form.elements[27], form.elements[28], form.elements[29], form.elements[30], form.elements[31], form.elements[32], form.elements[33], form.elements[34]]},
		{"answer": [form.elements[33], form.elements[37], form.elements[39], form.elements[41], form.elements[48], form.elements[51], form.elements[62]]},
		{"answer": [form.elements[41], form.elements[42], form.elements[43], form.elements[44], form.elements[45], form.elements[46], form.elements[47]]},
		{"answer": [form.elements[35], form.elements[38], form.elements[40], form.elements[47], form.elements[49], form.elements[52]]},
		{"answer": [form.elements[50], form.elements[58], form.elements[64], form.elements[72], form.elements[79]]},
		{"answer": [form.elements[53], form.elements[54], form.elements[55], form.elements[56], form.elements[57], form.elements[58], form.elements[59], form.elements[60], form.elements[61], form.elements[62]]},
		{"answer": [form.elements[66], form.elements[67], form.elements[68], form.elements[69], form.elements[70], form.elements[71], form.elements[72], form.elements[73], form.elements[74], form.elements[75], form.elements[76]]},
		{"answer": [form.elements[69], form.elements[78], form.elements[81], form.elements[83], form.elements[105], form.elements[108], form.elements[111], form.elements[115], form.elements[126]]},
		{"answer": [form.elements[97], form.elements[98], form.elements[99], form.elements[100], form.elements[101], form.elements[102], form.elements[103], form.elements[104], form.elements[105]]},
		{"answer": [form.elements[84], form.elements[106], form.elements[109], form.elements[112], form.elements[116], form.elements[129]]},
		{"answer": [form.elements[84], form.elements[85], form.elements[86], form.elements[87], form.elements[88], form.elements[89], form.elements[90], form.elements[91], form.elements[92], form.elements[93], form.elements[94], form.elements[95], form.elements[96]]},
		{"answer": [form.elements[63], form.elements[65], form.elements[77], form.elements[80], form.elements[82], form.elements[93], form.elements[107], form.elements[110], form.elements[113], form.elements[117], form.elements[130], form.elements[133], form.elements[147], form.elements[151], form.elements[161], form.elements[167], form.elements[177], form.elements[183]]},
		{"answer": [form.elements[114], form.elements[119], form.elements[131], form.elements[140], form.elements[149], form.elements[154], form.elements[163], form.elements[174], form.elements[179], form.elements[186], form.elements[204], form.elements[209], form.elements[215]]},
		{"answer": [form.elements[118], form.elements[119], form.elements[120], form.elements[121], form.elements[122], form.elements[123], form.elements[124], form.elements[125], form.elements[126], form.elements[127], form.elements[128], form.elements[129]]},
		{"answer": [form.elements[132], form.elements[146], form.elements[150], form.elements[160], form.elements[164], form.elements[175], form.elements[181], form.elements[197], form.elements[206], form.elements[211], form.elements[219], form.elements[224], form.elements[232]]},
		{"answer": [form.elements[134], form.elements[148], form.elements[152], form.elements[162], form.elements[170], form.elements[178], form.elements[184], form.elements[202]]},
		{"answer": [form.elements[135], form.elements[136], form.elements[137], form.elements[138], form.elements[139], form.elements[140], form.elements[141], form.elements[142], form.elements[143], form.elements[144], form.elements[145]]},
		{"answer": [form.elements[153], form.elements[154], form.elements[155], form.elements[156], form.elements[157], form.elements[158], form.elements[159]]},
		{"answer": [form.elements[165], form.elements[176], form.elements[182], form.elements[201], form.elements[207], form.elements[212], form.elements[220]]},
		{"answer": [form.elements[165], form.elements[166], form.elements[167], form.elements[168], form.elements[169], form.elements[170], form.elements[171], form.elements[172], form.elements[173]]},
		{"answer": [form.elements[180], form.elements[190], form.elements[205], form.elements[210], form.elements[218], form.elements[222]]},
		{"answer": [form.elements[185], form.elements[186], form.elements[187], form.elements[188], form.elements[189], form.elements[190], form.elements[191], form.elements[192], form.elements[193], form.elements[194], form.elements[195], form.elements[196], form.elements[197], form.elements[198], form.elements[199], form.elements[200]]},
		{"answer": [form.elements[203], form.elements[208], form.elements[213], form.elements[221], form.elements[225], form.elements[235], form.elements[237], form.elements[239], form.elements[241], form.elements[243]]},
		{"answer": [form.elements[213], form.elements[214], form.elements[215], form.elements[216], form.elements[217]]},
		{"answer": [form.elements[223], form.elements[229], form.elements[236], form.elements[238], form.elements[240], form.elements[242], form.elements[244], form.elements[246], form.elements[250], form.elements[252], form.elements[254], form.elements[263], form.elements[265]]},
		{"answer": [form.elements[226], form.elements[227], form.elements[228], form.elements[229], form.elements[230], form.elements[231], form.elements[232], form.elements[233], form.elements[234]]},
		{"answer": [form.elements[245], form.elements[247], form.elements[251], form.elements[253], form.elements[258], form.elements[264], form.elements[266], form.elements[269], form.elements[277], form.elements[278], form.elements[279], form.elements[280]]},
		{"answer": [form.elements[247], form.elements[248], form.elements[249]]},
		{"answer": [form.elements[254], form.elements[255], form.elements[256], form.elements[257], form.elements[258], form.elements[259], form.elements[260], form.elements[261], form.elements[262]]},
		{"answer": [form.elements[267], form.elements[268], form.elements[269], form.elements[270], form.elements[271], form.elements[272], form.elements[273], form.elements[274], form.elements[275], form.elements[276]]}
	];


	const conn = new XMLHttpRequest();
	conn.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    const answer = JSON.parse(this.responseText);

		for(let i=0;i<answer.length;i++) {
			const answer_ = answer[i];
			const answerOp = answer_db[i];

			for(let j=0;j<answer_.answer.length;j++) {

				answerOp.answer[j].addEventListener('keyup', () => {
					if(answer_.answer[j] == answerOp.answer[j].value.toUpperCase()) {
						answerOp.answer[j].classList.add("valid-word");
						answerOp.answer[j].classList.remove("invalid-word");
					}
					else {
						answerOp.answer[j].classList.remove("valid-word");
						answerOp.answer[j].classList.add("invalid-word");
					}
				});
			}
		}


		answer.forEach((i, x) => {
			question.innerHTML += `
				<article class="question">
					${i.id}. ${i.question}
				</article>
			`;

			questionSelect.innerHTML += `
				<option value="${x}">
					${i.id}
				</option>
			`;


			// default
			if(x == questionSelect.value)
				questionValue.innerHTML =`${i.question}`;

			questionSelect.addEventListener("change", () => {
				if(x == questionSelect.value) 
					questionValue.innerHTML = `${i.question}`;
			});
		});

	  }
	};

	window.addEventListener("scroll", () => {
		if(document.documentElement.scrollTop > question.offsetTop) 
			questionFixed.style.display = "none";
		else 
			questionFixed.style.display = "block";
	});


	conn.open("GET", "answers_.json", true);
	conn.send();
}


// let test = answerOp.answer.every((el) => el.value != "" && answer_.answer[j] == answerOp.answer[j].value.toUpperCase());
