var citis = document.getElementById("city");
var districts = document.getElementById("district");
var wards = document.getElementById("ward");

var citisa = document.getElementById("citya");
var districtsa = document.getElementById("districta");
var wardsa = document.getElementById("warda");
var Parameter = {
  url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json", 
  method: "GET", 
  responseType: "application/json", 
};
var promise = axios(Parameter);
promise.then(function (result) {
  renderCity(result.data);
});

function renderCity(data) {
  for (const x of data) {
    citis.options[citis.options.length] = new Option(x.Name, x.Id);
  }
  citis.onchange = function () {
    district.length = 1;
    ward.length = 1;
    if(this.value != ""){
      const result = data.filter(n => n.Id === this.value);

      for (const k of result[0].Districts) {
        district.options[district.options.length] = new Option(k.Name, k.Id);
      }
    }
  };
  district.onchange = function () {
    ward.length = 1;
    const dataCity = data.filter((n) => n.Id === citis.value);
    if (this.value != "") {
      const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;

      for (const w of dataWards) {
        wards.options[wards.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
}



var promisea = axios(Parameter);
promisea.then(function (result) {
  renderCitya(result.data);
});

function renderCitya(data) {
  for (const x of data) {
    citisa.options[citisa.options.length] = new Option(x.Name, x.Id);
  }
  citisa.onchange = function () {
    districta.length = 1;
    warda.length = 1;
    if(this.value != ""){
      const result = data.filter(n => n.Id === this.value);

      for (const k of result[0].Districts) {
        districta.options[districta.options.length] = new Option(k.Name, k.Id);
      }
    }
  };
  districta.onchange = function () {
    warda.length = 1;
    const dataCitya = data.filter((n) => n.Id === citisa.value);
    if (this.value != "") {
      const dataWardsa = dataCitya[0].Districts.filter(n => n.Id === this.value)[0].Wards;

      for (const w of dataWardsa) {
        wardsa.options[wardsa.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
}