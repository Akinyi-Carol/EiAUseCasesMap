var map = new L.Map('leaflet', {
	layers: [
		new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
		})
	],
	center: [0, 0],
	zoom: 3
});

var bounds_group = new L.featureGroup([]);

var sidebar = L.control.sidebar('sidebar', {
		position: 'left'
});

map.addControl(sidebar);

/*Legend specific*/
var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += '<i style="background: #c15e36"></i><span>Current Use Cases</span><br>';
  div.innerHTML += '<i style="background: rgba(193, 94, 54, 0.6)"></i><span>Cohort 2 Use Cases</span><br>';
  div.innerHTML += '<i style="background: #28a046"></i><span>Multiple Cohorts Use Cases</span><br>';
  div.innerHTML += '<i style="background: rgba(83, 182, 72, 0.6)"></i><span>Transform Use Cases</span><br>';
  div.innerHTML += '<i style="background: rgba(83, 182, 72, 0.2)"></i><span>Strategic Ecosystem Partner Use Cases</span><br>';
  div.innerHTML += '<i style="background: #F9D71C"></i><span>Waitlisted Use Cases</span><br>';
  return div;
};

legend.addTo(map);

// Style
function styleUC(feature) {
		if (['MEX', 'PER', 'COL', 'IND', 'KHM', 'EGY'].includes(feature.properties['iso3'])) {
			return {
				color: 'rgba(255,255,255,0.8)',
				fillOpacity: 1,
				fillColor: '#c15e36',
				interactive: true,
			};
		}
		else if (['MAR'].includes(feature.properties['iso3'])) {
			return {
				color: 'rgba(255,255,255,0.8)',
				fillOpacity: 0.6,
				fillColor: '#53b648',
				interactive: true,
			};
		}
		else if (['CIV', 'BFA'].includes(feature.properties['iso3'])) {
			return {
				color: 'rgba(255,255,255,0.8)',
				fillOpacity: 0.6,
				fillColor: '#c15e36',
				interactive: true,
			};
		}
		else if (['COD', 'UGA', 'KEN', 'TZA', 'RWA', 'BDI', 'ZMB', 'MWI', 'GHA', 'NGA', 'ETH'].includes(feature.properties['iso3'])) {
			return {
				color: 'rgba(255,255,255,0.8)',
				fillOpacity: 1,
				fillColor: '#28a046',
				interactive: true,
			};
		}
		else if (['MOZ'].includes(feature.properties['iso3'])) {
			return {
				color: 'rgba(255,255,255,0.8)',
				fillOpacity: 0.2,
				fillColor: '#28a046',
				interactive: true,
			};
		}
		else if (['VNM'].includes(feature.properties['iso3'])) {
			return {
				color: 'rgba(255,255,255,0.8)',
				fillOpacity: 0.4,
				fillColor: '#F9D71C',
				interactive: true,
			};
		}
		else {
			return {
				color: '#e5e5e5',
				fillOpacity: 1,
				fillColor: '#e5e5e5',
				fill: true
			};
		};
	};

// Content
// 'GHA', 'NGA', 'MEX', 'ETH', 'IND', 'RWA', 'PER', 'COL', 'KHM', 'EGY'
function contentUC(feature,layer) {
		if (['GHA'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top:10px" width="300px" height="300px";>\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/gha.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom: 30px"><h1>&nbsp &nbsp Ghana Use Cases</h1></div>\
								\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Current Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											\<tbody>\
												<tr>\
													<th>GAIP - GHANA</th>\
													<td>\
														<span class="td-cell">\
															<img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Maize- Mixed</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/crop/Maize-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Maize</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/AP-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Agrifinance Providers</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingTwo">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
										Cohort 2 Use Cases\
									  </button>\
									</h2>\
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  <table style="width:100%;" class="table table-bordered table-responsive">\
									<thead>\
										<tr>\
											<th>Use Case</th>\
											<th>Farming System</th>\
											<th>Mandate Crops</th>\
											<th>Demand Partners</th>\
									  	</tr>\
									</thead>\
									\<tbody>\
										<tr>\
											<th>GHANA-SOY - ESOKO</th>\
											<td>\
												<span class="td-cell">\
													<img src="img/fsys/Dry Rainfed-RGB.png" width="30" height="30">\
												</span>\
												<span class="td-cell">Dry Rainfed</span>\
											</td>\
											<td>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/crop/Soybean-RGB.png" width="25" height="25">\
													</span>\
													<span class="td-cell">Soy</span>\
												</span><br>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/crop/Maize-RGB.png" width="25" height="25">\
													</span>\
													<span class="td-cell">Maize</span>\
												</span>\
											</td>\
											<td>\
												<img src="img/partner/A_ISPs-RGB.png" width="30" height="30"><br>\
												Agro-Information Service Provider\
											</td>\
									  	</tr>\
									  	\<tr>\
											<th>RAINFOREST ALLIANCE - COCOA</th>\
											<td>\
												<span class="td-cell">\
													<img src="img/fsys/Humid Lowland Tree Crop-RGB.png" width="30" height="30">\
												</span>\
												<span class="td-cell">Humid Lowland Tree Crop</span>\
											</td>\
											<td>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/crop/Cocoa-RGB.png" width="25" height="25">\
													</span>\
													<span class="td-cell">Cocoa</span>\
												</span><br>\
											</td>\
											<td>\
												<img src="img/partner/SS_CSOs-RGB.png" width="30" height="30"><br>\
												Specialised Sustainability CSOs\
											</td>\
									  	</tr>\
									</tbody>\
								</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingThree">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">\
										Waitlisted Use Cases\
									  </button>\
									</h2>\
									<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">\
										<div class="accordion-body">\
											<table style="width:100%;" class="table table-bordered table-responsive">\
												<thead>\
													<tr>\
														<th>Use Case</th>\
														<th>Farming System</th>\
														<th>Mandate Crops</th>\
														<th>Demand Partners</th>\
													</tr>\
												</thead>\
												<tbody>\
													<tr>\
														<th>RIKOLTO - RICE</th>\
														<td>\
															<span class="td-cell">\
																<img src="img/fsys/Rice-RGB.png" width="25" height="25">\
															</span>\
															<span class="td-cell">Rice Based</span>\
														</td>\
														<td>\
															<span class="td-row">\
																<span class="td-cell">\
																	<img src="img/crop/Rice-RGB.png" width="25" height="25">\
																</span>\
																<span class="td-cell">Rice </span>\
															</span><br>\
														</td>\
														<td>\
															<img src="img/partner/FS_NGOs-RGB.png" width="30" height="30"><br>\
															Farmer Supporting NGOs\
														</td>\
													</tr>\
													<tr>\
														<th>AGRA</th>\
														<td>\
															Various\
														</td>\
														<td>\
															<span class="td-row">\
																<span class="td-cell">\
																	<img src="img/crop/Rice-RGB.png" width="25" height="25">\
																</span>\
																<span class="td-cell">Rice </span>\
															</span><br>\
															<span class="td-row">\
																<span class="td-cell">\
																	<img src="img/crop/Maize-RGB.png" width="25" height="25">\
																</span>\
																<span class="td-cell">Maize </span>\
															</span><br>\
															<span class="td-row">\
																<span class="td-cell">Potato </span>\
															</span>\
														</td>\
														<td>\
															<img src="img/partner/A_ISPs-RGB.png" width="30" height="30"><br>\
															Agro-Information Service Provider\
														</td>\
													</tr>\
													<tr>\
														<th>YARA</th>\
														<td>\
															<span class="td-cell">\
																<img src="img/fsys/Dry Rainfed-RGB.png" width="30" height="30">\
															</span>\
															<span class="td-cell">Dry - Rainfed</span>\
														</td>\
														<td>\
															<span class="td-row">\
																<span class="td-cell">\
																	<img src="img/crop/Soybean-RGB.png" width="25" height="25">\
																</span>\
																<span class="td-cell">Soy</span>\
															</span><br>\
															<span class="td-row">\
																<span class="td-cell">\
																	<img src="img/crop/Maize-RGB.png" width="30" height="30">\
																</span>\
																<span class="td-cell">Maize</span>\
															</span>\
														</td>\
														<td>\
															<img src="img/partner/IP-RGB.png" width="30" height="30"><br>\
															Inputs Providers\
														</td>\
													</tr>\
												</tbody>\
											</table>\
										</div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['NGA'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top:10px" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/nga.png" width="100px" heigth="200px"></div>\
								<div style="display:inline-block; margin-bottom: 30px"><h1>&nbsp &nbsp Nigeria Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Current Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>SAA NIGERIA</th>\
													<td>\
														<span class="td-cell">\
															<img src="img/fsys/Cereal-Root Crop Mixed-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Cereal Root Crop Mixed</span>\
													</td>\
													<td>\
													\<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Maize-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Maize</span>\
														</span><br>\
														<span class="td-row">\
															<span class="td-cell">\
																<img src="img/crop/Cassava-RGB.png" width="25" height="25">\
															</span>\
															<span class="td-cell">Cassava</span>\
														</span><br>\
														<span class="td-row">\
															<span class="td-cell">\
																<img src="img/crop/Rice-RGB.png" width="25" height="25">\
															</span>\
															<span class="td-cell">Rice</span>\
														</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/FS_NGOs-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Farmer Supporting NGOs</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingTwo">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
										Waitlisted Use Cases\
									  </button>\
									</h2>\
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  <table style="width:100%;" class="table table-bordered table-responsive">\
										<thead>\
											<tr>\
												<th>Use Case</th>\
												<th>Farming System</th>\
												<th>Mandate Crops</th>\
												<th>Demand Partners</th>\
											</tr>\
										</thead>\
										<tbody>\
											<tr>\
												<th>ATAFI - CARI- RICE</th>\
												<td>\
													<span class="td-cell">\
														<img src="img/fsys/Rice-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">Rice Based</span>\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Rice-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Rice</span>\
													</span><br>\
												</td>\
												<td>\
													<img src="img/partner/CT-RGB.png" width="30" height="30"><br>\
													Commodity Traders\
												</td>\
											</tr>\
											<tr>\
												<th>TAAT</th>\
												<td>\
													Various\
												</td>\
												<td>\
													Various\
												</td>\
												<td>\
													<img src="img/partner/DPM-RGB.png" width="30" height="30"><br>\
													Demand Partner\
												</td>\
											</tr>\
										</tbody>\
									</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['MEX', 'COL', 'PER'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top:10px" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/mex_per_col.png" width="400px" heigth="300px"></div>\
								<div style="text-align: center; margin-bottom: 30px"><h1>LatAm Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Current Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>GOVT LAT-AM</th>\
													<td>\
														<span class="td-cell">\
															<img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Maize- Mixed</span>\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Maize-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Maize</span>\
														</span><br>\
														<span class="td-row">\
															<span class="td-cell">\
															</span>\
															<span class="td-cell">Potatoes</span>\
														</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/NARES-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">NARES Partners</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['ETH'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top:10px" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/eth.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom: 30px"><h1>&nbsp &nbsp Ethiopia</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Current Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>FERTILISER - ETHIOPIA</th>\
													<td>\
														<span class="td-cell">\
															<img src="img/fsys/Dry Rainfed-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Dry - Rainfed</span>\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Wheat-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Wheat</span>\
														</span><br>\
														<span class="td-row">\
															<span class="td-cell">\
																<img src="img/crop/Sorgum-RGB.png" width="25" height="25">\
															</span>\
															<span class="td-cell">Sorghum</span>\
														</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/NARES-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">NARES Partners</span>\
													</td>\
												</tr>\
												<tr>\
													<th>DIGITAL GREEN - ETHIOPIA</th>\
													<td>\
														<span class="td-cell">\
															<img src="img/fsys/Dry Rainfed-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Dry - Rainfed</span>\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Wheat-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Wheat</span>\
														</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/FS_NGOs-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Farmer Supporting NGOs</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingTwo">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
										Cohort 2 Use Cases\
									  </button>\
									</h2>\
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  <table style="width:100%;" class="table table-bordered table-responsive">\
										<thead>\
											<tr>\
												<th>Use Case</th>\
												<th>Farming System</th>\
												<th>Mandate Crops</th>\
												<th>Demand Partners</th>\
											</tr>\
										</thead>\
										<tbody>\
											<tr>\
												<th>ONE ACRE FUND - EAST AFRICA</th>\
												<td>\
													Various\
												</td>\
												<td>\
													Various\
												</td>\
												<td>\
													<span class="td-cell">\
														<img src="img/partner/AP-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">Agrifinance Providers</span>\
												</td>\
											</tr>\
										</tbody>\
									</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['RWA'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top:10px" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/rwa.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom:30px"><h1>&nbsp &nbsp Rwanda Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Current Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>RAB - RWANDA</th>\
													<td>\
														<span class="td-cell">\
															<img src="img/fsys/Intensive Mixed-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Intensive Mixed</span>\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">Potatoes</span>\
														</span><br>\
														<span class="td-row">\
															<span class="td-cell">\
																<img src="img/crop/Rice-RGB.png" width="25" height="25">\
															</span>\
															<span class="td-cell">Rice</span>\
														</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/NARES-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">NARES Partners</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingTwo">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
										Cohort 2 Use Cases\
									  </button>\
									</h2>\
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  <table style="width:100%;" class="table table-bordered table-responsive">\
										<thead>\
											<tr>\
												<th>Use Cases</th>\
												<th>Farming System</th>\
												<th>Mandate Crops</th>\
												<th>Demand Partners</th>\
											</tr>\
										</thead>\
										<tbody>\
											<tr>\
												<th>ONE ACRE FUND - EAST AFRICA</th>\
												<td>\
													Various\
												</td>\
												<td>\
													Various\
												</td>\
												<td>\
													<span class="td-cell">\
														<img src="img/partner/AP-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">Agrifinance Providers</span>\
												</td>\
											</tr>\
										</tbody>\
									</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingThree">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">\
										Waitlisted Use Cases\
									  </button>\
									</h2>\
									<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">\
										<div class="accordion-body">\
											<table style="width:100%;" class="table table-bordered table-responsive">\
												<thead>\
													<tr>\
														<th>Use Case</th>\
														<th>Farming System</th>\
														<th>Mandate Crops</th>\
														<th>Demand Partners</th>\
													</tr>\
												</thead>\
												<tbody>\
													<tr>\
														<th>AGRA</th>\
														<td>\
															Various\
														</td>\
														<td>\
															<span class="td-row">\
																<span class="td-cell">\
																	<img src="img/crop/Rice-RGB.png" width="25" height="25">\
																</span>\
																<span class="td-cell">Rice </span>\
															</span><br>\
															<span class="td-row">\
																<span class="td-cell">\
																	<img src="img/crop/Maize-RGB.png" width="25" height="25">\
																</span>\
																<span class="td-cell">Maize </span>\
															</span><br>\
															\<span class="td-row">\
																<span class="td-cell">Potato </span>\
															</span>\
														</td>\
														<td>\
															<img src="img/partner/A_ISPs-RGB.png" width="30" height="30"><br>\
															Agro-Information Service Provider\
														</td>\
													</tr>\
													<tr>\
														<th>FTMA</th>\
														<td>\
															<span class="td-cell">\
																<img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30">\
															</span>\
															<span class="td-cell">Maize- Mixed</span>\
														</td>\
														<td>\
															<span class="td-row">\
																<span class="td-cell">\
																	<img src="img/crop/Maize-RGB.png" width="25" height="25">\
																</span>\
																<span class="td-cell">Maize</span>\
															</span><br>\
															<span class="td-row">\
																<span class="td-cell">Potatoes</span>\
															</span>\
														</td>\
														<td>\
															<img src="img/partner/FS_NGOs-RGB.png" width="30" height="30"><br>\
															Farmer Supporting NGOs\
														</td>\
													</tr>\
												</tbody>\
											</table>\
										</div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['EGY'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top:10px" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/egy.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom: 30px"><h1>&nbsp &nbsp Egypt Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Current Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>GVT- EGYPT</th>\
													<td>\
														<span class="td-cell">\
															<img src="img/fsys/Irrigated-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Irrigated</span>\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Beans-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Faba Bean</span>\
														</span><br>\
														<span class="td-row">\
															<span class="td-cell">\
																<img src="img/crop/Wheat-RGB.png" width="25" height="25">\
															</span>\
															<span class="td-cell">Wheat</span>\
														</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/NARES-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">NARES Partners</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['IND'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top: 10px;" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/ind.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom: 30px"><h1>&nbsp &nbsp India Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Current Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>PLANTING DATE S.ASIA</th>\
													<td>\
														<span class="td-cell">\
															<img src="img/fsys/Rice-Wheat-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Rice-Wheat</span>\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Rice-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Rice</span>\
														</span><br>\
														<span class="td-row">\
															<span class="td-cell">\
																<img src="img/crop/Wheat-RGB.png" width="25" height="25">\
															</span>\
															<span class="td-cell">Wheat</span>\
														</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/NARES-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">NARES Partners</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['KHM'].includes(feature.properties['iso3'])) {
			var cc = '<div style ="padding-top: 10px;" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/khm.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom: 30px"><h1>&nbsp Cambodia Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Current Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>DSR - CAMBODIA</th>\
													<td>\
														<span class="td-cell">\
															<img src="img/fsys/Rice-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Rice Based</span>\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Rice-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Rice</span>\
													</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/NARES-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">NARES Partners</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['COD'].includes(feature.properties['iso3'])) {
			var cc = '<div style ="padding-top: 10px; width="300px" height="300px">\
								<div style="display:inline-block;vertical-align:top;"><img src="img/flags/cod.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom: 30px;"><h1 style="margin-top: 5px !important; margin-left: 10px">Democratic Republic<br>of Congo Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Strategic Ecosystem Partner Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>DRC- COFFEE- OLAM</th>\
													<td>\
														<span class="td-cell">\
															<img src="img/fsys/Tree Crop-Mixed-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Tropical Tree Crop Mixed</span>\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Coffee-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Coffee</span>\
													</span><br>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Banana-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Bananas</span>\
													</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/CT-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Commodity Traders</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingTwo">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
										Waitlisted Use Cases\
									  </button>\
									</h2>\
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  <table style="width:100%;" class="table table-bordered table-responsive">\
										<thead>\
											<tr>\
												<th>Use Cases</th>\
												<th>Farming System</th>\
												<th>Mandate Crops</th>\
												<th>Demand Partners</th>\
											</tr>\
										</thead>\
										<tbody>\
											<tr>\
												<th>TAAT</th>\
												<td>\
													Various\
												</td>\
												<td>\
													Various\
												</td>\
												<td>\
													<span class="td-cell">\
														<img src="img/partner/DPM-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">TAAT</span>\
												</td>\
											</tr>\
										</tbody>\
									</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['CIV'].includes(feature.properties['iso3'])) {
			var cc = '<div style ="padding-top: 10px; width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/ivory.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom:30px"><h1>&nbsp Cote dIvore Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Cohort 2 Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>COCOA-SOILS -OLAM</th>\
													<td>\
														<img src="img/fsys/Humid Lowland Tree Crop-RGB.png" width="30" height="30"><br>\
														Humid Lowland Tree Crop\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Cocoa-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Cocoa</span>\
													</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/CT-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Commodity Traders</span>\
													</td>\
												</tr>\
												<tr>\
													<th>RAINFOREST ALLIANCE - COCOA</th>\
													<td>\
														<img src="img/fsys/Humid Lowland Tree Crop-RGB.png" width="30" height="30"><br>\
														Humid Lowland Tree Crop\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Cocoa-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Cocoa</span>\
													</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/SS_CSOs-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Specialised Sustainability CSOs</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['BFA'].includes(feature.properties['iso3'])) {
			var cc = '<div style ="padding-top: 10px;" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/bf.jpeg" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom:30px"><h1>&nbsp Burkina Faso Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Cohort 2 Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>COCOA-SOILS -OLAM</th>\
													<td>\
														<img src="img/fsys/Humid Lowland Tree Crop-RGB.png" width="30" height="30"><br>\
														Humid Lowland Tree Crop\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Cocoa-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Cocoa</span>\
													</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/CT-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Commodity Traders</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['ZMB'].includes(feature.properties['iso3'])) {
			var cc = '<div style ="padding-top: 10px;" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/zmb.jpeg" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom:30px"><h1>&nbsp Zambia Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Strategic Ecosystem Partner Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>SOLIDARIDAD SOY ADVISORY</th>\
													<td>\
														<img src="img/fsys/Dry Rainfed-RGB.png" width="30" height="30"><br>\
														Dry - Rainfed\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Soybean-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Soy</span>\
													</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/FS_NGOs-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Farmer Supporting NGOs</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingTwo">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
										Waitlisted Use Cases\
									  </button>\
									</h2>\
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  <table style="width:100%;" class="table table-bordered table-responsive">\
										<thead>\
											<tr>\
												<th>Use Cases</th>\
												<th>Farming System</th>\
												<th>Mandate Crops</th>\
												<th>Demand Partners</th>\
											</tr>\
										</thead>\
										<tbody>\
											<tr>\
												<th>FTMA</th>\
												<td>\
													<img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30"><br>\
													Maize - Mixed\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Maize-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Maize</span>\
													</span><br>\
													<span class="td-row">\
														<span class="td-cell">Potatoes</span>\
													</span>\
												</td>\
												<td>\
													<img src="img/partner/FS_NGOs-RGB.png" width="30" height="30"><br>\
													Farmer Supporting NGOs\
												</td>\
											</tr>\
											<tr>\
												<th>TAAT</th>\
												<td>\
													Various\
												</td>\
												<td>\
													Various\
												</td>\
												<td>\
													<span class="td-cell">\
														<img src="img/partner/DPM-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">Demand Partner</span>\
												</td>\
											</tr>\
											<tr>\
												<th>AFRICARISING</th>\
												<td>\
													Various\
												</td>\
												<td>\
													Various\
												</td>\
												<td>\
													<span class="td-cell">\
														<img src="img/partner/DPM-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">Demand Partner</span>\
												</td>\
											</tr>\
										</tbody>\
									</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['MOZ'].includes(feature.properties['iso3'])) {
			var cc = '<div style ="padding-top: 10px;" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/moz.jpeg" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom:30px"><h1>&nbsp Mozambique Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Strategic Ecosystem Partner Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>SOLIDARIDAD SOY ADVISORY</th>\
													<td>\
														<img src="img/fsys/Dry Rainfed-RGB.png" width="30" height="30"><br>\
														Dry - Rainfed\
													</td>\
													<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Soybean-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Soy</span>\
													</span>\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/FS_NGOs-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Farmer Supporting NGOs</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['MWI'].includes(feature.properties['iso3'])) {
			var cc = '<div style ="padding-top: 10px;" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/mwi.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom:30px"><h1>&nbsp Malawi Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Cohort 2 Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  	<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>ONE ACRE FUND - EAST AFRICA</th>\
													<td>\
														Various\
													</td>\
													<td>\
														Various\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/A_ISPs-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Agrifinance Providers</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingTwo">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
										Strategic Ecosystem Partner Use Cases\
									  </button>\
									</h2>\
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  <table style="width:100%;" class="table table-bordered table-responsive">\
										<thead>\
											<tr>\
												<th>Use Cases</th>\
												<th>Farming System</th>\
												<th>Mandate Crops</th>\
												<th>Demand Partners</th>\
											</tr>\
										</thead>\
										<tbody>\
											<tr>\
												<th>SOLIDARIDAD SOY ADVISORY</th>\
												<td>\
													<img src="img/fsys/Dry Rainfed-RGB.png" width="30" height="30"><br>\
													Dry - Rainfed\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Soybean-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Soy</span>\
													</span><br>\
												</td>\
												<td>\
													<img src="img/partner/FS_NGOs-RGB.png" width="30" height="30"><br>\
													Farmer Supporting NGOs\
												</td>\
											</tr>\
										</tbody>\
									</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingThree">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">\
										Waitlisted Use Cases\
									  </button>\
									</h2>\
									<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">\
										<div class="accordion-body">\
											<table style="width:100%;" class="table table-bordered table-responsive">\
												<thead>\
													<tr>\
														<th>Use Case</th>\
														<th>Farming System</th>\
														<th>Mandate Crops</th>\
														<th>Demand Partners</th>\
													</tr>\
												</thead>\
												<tbody>\
													<tr>\
														<th>AFRICARISING</th>\
														<td>\
															Various\
														</td>\
														<td>\
															Various\
														</td>\
														<td>\
															<span class="td-row">\
																<span class="td-cell">\
																	<img src="img/partner/DPM-RGB.png" width="30" height="30">\
																</span>\
																<span class="td-cell">Demand Partner</span>\
															</span>\
														</td>\
													</tr>\
												</tbody>\
											</table>\
										</div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}

		else if (['KEN'].includes(feature.properties['iso3'])) {
			var cc = '<div style ="padding-top: 10px;" width="300px" height="300px">\
							<div style=display:inline-block;vertical-align:top;><img src="img/flags/ken.png" width="100px" heigth="100px"></div>\
							<div style="display:inline-block; margin-bottom: 30px;"><h1>&nbsp &nbsp Kenya Use Cases</h1></div>\
							<div class="accordion" id="accordionExample">\
							  <div class="accordion-item">\
								<h2 class="accordion-header" id="headingOne">\
								  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
									Cohort 2 Use Cases\
								  </button>\
								</h2>\
								<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
								  <div class="accordion-body">\
									<table style="width:100%" class="table table-bordered table-responsive">\
										<thead>\
											<tr>\
												<th>Use Case</th>\
												<th>Farming System</th>\
												<th>Mandate Crops</th>\
												<th>Demand Partners</th>\
											</tr>\
										</thead>\
										<tbody>\
											<tr>\
												<th>ONE ACRE FUND - EAST AFRICA</th>\
												<td>\
													Various\
												</td>\
												<td>\
													Various\
												</td>\
												<td>\
													<span class="td-cell">\
														<img src="img/partner/A_ISPs-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">Agrifinance Providers</span>\
												</td>\
											</tr>\
											<tr>\
											<th>E-PROD EAST AFRICA</th>\
											<td>\
												<span class="td-cell">\
													<img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30">\
												</span>\
												<span class="td-cell">\
													Maize Mixed\
												</span>\
											</td>\
											<td>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/crop/Maize-RGB.png" width="25" height="25">\
													</span>\
													<span class="td-cell">Maize</span>\
												</span><br>\
											</td>\
											<td>\
												<span class="td-cell">\
													<img src="img/partner/CT-RGB.png" width="30" height="30">\
												</span>\
												<span class="td-cell">\
													Commodity Traders\
												</span>\
											</td>\
										</tr>\
										</tbody>\
									</table>\
								  </div>\
								</div>\
							  </div>\
							  <div class="accordion-item">\
								<h2 class="accordion-header" id="headingTwo">\
								  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
									Transform Use Cases\
								  </button>\
								</h2>\
								<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">\
								  <div class="accordion-body">\
								  <table style="width:100%;" class="table table-bordered table-responsive">\
									<thead>\
										<tr>\
											<th>Use Cases</th>\
											<th>Farming System</th>\
											<th>Mandate Crops</th>\
											<th>Demand Partners</th>\
										</tr>\
									</thead>\
									<tbody>\
										<tr>\
											<th>MERCYCORPS-SPROUT</th>\
											<td>\
												Various\
											</td>\
											<td>\
												Various\
											</td>\
											<td>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/partner/DPM-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">Digital Platform Manager</span>\
												</span>\
											</td>\
										</tr>\
										<tr>\
											<th>TNC- LANDSCAPES</th>\
											<td>\
												<img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30"><br>\
												Maize- Mixed\
												</span>\
											</td>\
											<td>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/crop/Maize-RGB.png" width="25" height="25">\
													</span>\
													<span class="td-cell">Maize</span>\
												</span><br>\
											</td>\
											<td>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/partner/CT-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">Commodity Traders </span>\
												</span>\
											</td>\
										</tr>\
										<tr>\
											<th>WB - KENYA</th>\
											<td>\
												Various\
											</td>\
											<td>\
												Various\
											</td>\
											<td>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/partner/NARES-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">NARES Partners</span>\
												</span>\
											</td>\
										</tr>\
										<tr>\
											<th>SULPHUR MILLS</th>\
											<td>\
												<img src="img/fsys/Dry Rainfed-RGB.png" width="30" height="30"><br>\
												Dry - Rainfed\
											</td>\
											<td>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/crop/Maize-RGB.png" width="25" height="25">\
													</span>\
													<span class="td-cell">Maize</span>\
												</span>\
											</td>\
											<td>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/partner/IP-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">Inputs Providers</span>\
												</span>\
											</td>\
										</tr>\
										<tr>\
											<th>CROPNUTS</th>\
											<td>\
												Various\
											</td>\
											<td>\
												Various\
											</td>\
											<td>\
												<span class="td-row">\
													<span class="td-cell">\
														<img src="img/partner/IG-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">Insights Generators</span>\
												</span>\
											</td>\
										</tr>\
									</tbody>\
								</table>\
								  </div>\
								</div>\
							  </div>\
							  <div class="accordion-item">\
								<h2 class="accordion-header" id="headingThree">\
								  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">\
									Waitlisted Use Cases\
								  </button>\
								</h2>\
								<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">\
									<div class="accordion-body">\
										<table style="width:100%;" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>FTMA</th>\
													<td>\
														<span class="td-row">\
															<span class="td-cell"><img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30"></span>\
															<span class="td-cell">Maize Mixed </span>\
														</span>\
													</td>\
													<td>\
														<span class="td-row">\
															<span class="td-cell">\
																<img src="img/crop/Maize-RGB.png" width="25" height="25">\
															</span>\
															<span class="td-cell">Maize</span>\
														</span>\
														<span class="td-row">\
															<span class="td-cell">Potatoes</span>\
														</span>\
													</td>\
													<td>\
														<span class="td-row">\
															<span class="td-cell">\
																<img src="img/partner/FS_NGOs-RGB.png" width="30" height="30">\
															</span>\
															<span class="td-cell">Farmer Supporting NGOs</span>\
														</span>\
													</td>\
												</tr>\
												<tr>\
													<th>TAAT</th>\
													<td>\
														Various\
													</td>\
													<td>\
														Various\
													</td>\
													<td>\
														<span class="td-row">\
															<span class="td-cell"><img src="img/partner/DPM-RGB.png" width="30" height="30"></span>\
															<span class="td-cell">Demand Partner</span>\
														</span>\
													</td>\
												</tr>\
											</tbody>\
										</table>\
									</div>\
								</div>\
							  </div>\
							</div>\
							</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['TZA'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top: 10px;" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/tza.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom: 30px;"><h1>&nbsp &nbsp Tanzania Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Cohort 2 Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
										<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>ONE ACRE FUND - EAST AFRICA</th>\
													<td>\
														Various\
													</td>\
													<td>\
														Various\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/A_ISPs-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Agrifinance Providers</span>\
													</td>\
												</tr>\
												<tr>\
												<th>E-PROD EAST AFRICA</th>\
												<td>\
													<span class="td-cell">\
														<img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">\
														Maize Mixed\
													</span>\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Maize-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Maize</span>\
													</span><br>\
												</td>\
												<td>\
													<span class="td-cell">\
														<img src="img/partner/CT-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">\
														Commodity Traders\
													</span>\
												</td>\
											</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingTwo">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
										Transform Use Cases\
									  </button>\
									</h2>\
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  <table style="width:100%;" class="table table-bordered table-responsive">\
										<thead>\
											<tr>\
												<th>Use Cases</th>\
												<th>Farming System</th>\
												<th>Mandate Crops</th>\
												<th>Demand Partners</th>\
											</tr>\
										</thead>\
										<tbody>\
											<tr>\
												<th>TNC- LANDSCAPES</th>\
												<td>\
													<img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30"><br>\
													Maize- Mixed\
													</span>\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Maize-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Maize</span>\
													</span><br>\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/partner/CT-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Commodity Traders </span>\
													</span>\
												</td>\
											</tr>\
											<tr>\
												<th>CROPNUTS</th>\
												<td>\
													Various\
												</td>\
												<td>\
													Various\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/partner/IG-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Insights Generators</span>\
													</span>\
												</td>\
											</tr>\
										</tbody>\
									</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingThree">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">\
										Waitlisted Use Cases\
									  </button>\
									</h2>\
									<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">\
										<div class="accordion-body">\
											<table style="width:100%;" class="table table-bordered table-responsive">\
												<thead>\
													<tr>\
														<th>Use Case</th>\
														<th>Farming System</th>\
														<th>Mandate Crops</th>\
														<th>Demand Partners</th>\
													</tr>\
												</thead>\
												<tbody>\
													<tr>\
														<th>FTMA</th>\
														<td>\
															<span class="td-row">\
																<span class="td-cell"><img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30"></span>\
																<span class="td-cell">Maize Mixed </span>\
															</span>\
														</td>\
														<td>\
															<span class="td-row">\
																<span class="td-cell">\
																	<img src="img/crop/Maize-RGB.png" width="25" height="25">\
																</span>\
																<span class="td-cell">Maize</span>\
															</span>\
															<span class="td-row">\
																<span class="td-cell">Potatoes</span>\
															</span>\
														</td>\
														<td>\
															<img src="img/partner/FS_NGOs-RGB.png" width="30" height="30"><br>\
															Farmer Supporting NGOs\
														</td>\
													</tr>\
													<tr>\
														<th>TAAT</th>\
														<td>\
															Various\
														</td>\
														<td>\
															Various\
														</td>\
														<td>\
															<img src="img/partner/DPM-RGB.png" width="30" height="30"><br>\
															Demand Partner\
														</td>\
													</tr>\
													<tr>\
														<th>AFRICARISING</th>\
														<td>\
															Various\
														</td>\
														<td>\
															Various\
														</td>\
														<td>\
															<img src="img/partner/DPM-RGB.png" width="30" height="30"><br>\
															Demand Partner\
														</td>\
													</tr>\
												</tbody>\
											</table>\
										</div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['UGA'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top: 10px;" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/uga.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom: 30px;"><h1>&nbsp &nbsp Uganda Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Cohort 2 Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
										<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
													<th>ONE ACRE FUND - EAST AFRICA</th>\
													<td>\
														Various\
													</td>\
													<td>\
														Various\
													</td>\
													<td>\
														<span class="td-cell">\
															<img src="img/partner/A_ISPs-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Agrifinance Providers</span>\
													</td>\
												</tr>\
												<tr>\
												<th>E-PROD EAST AFRICA</th>\
												<td>\
													<span class="td-cell">\
														<img src="img/fsys/Maize Mixed-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">\
														Maize Mixed\
													</span>\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Maize-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Maize</span>\
													</span><br>\
												</td>\
												<td>\
													<span class="td-cell">\
														<img src="img/partner/CT-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">\
														Commodity Traders\
													</span>\
												</td>\
											</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingTwo">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
										Transform Use Cases\
									  </button>\
									</h2>\
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
									  <table style="width:100%;" class="table table-bordered table-responsive">\
										<thead>\
											<tr>\
												<th>Use Cases</th>\
												<th>Farming System</th>\
												<th>Mandate Crops</th>\
												<th>Demand Partners</th>\
											</tr>\
										</thead>\
										<tbody>\
											<tr>\
												<th>GRAINPULSE BANANAS</th>\
												<td>\
													<img src="img/fsys/Tree Crop-Mixed-RGB.png" width="30" height="30"><br>\
													Tropical Tree Crop Mixed \
													</span>\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Banana-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Banana</span>\
													</span><br>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Coffee-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Coffee</span>\
													</span>\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/partner/IP-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Inputs Providers</span>\
													</span>\
												</td>\
											</tr>\
											<tr>\
												<th>CROPNUTS</th>\
												<td>\
													Various\
												</td>\
												<td>\
													Various\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/partner/IG-RGB.png" width="30" height="30">\
														</span>\
														<span class="td-cell">Insights Generators</span>\
													</span>\
												</td>\
											</tr>\
										</tbody>\
									</table>\
									  </div>\
									</div>\
								  </div>\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingThree">\
									  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">\
										Waitlisted Use Cases\
									  </button>\
									</h2>\
									<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">\
										<div class="accordion-body">\
											<table style="width:100%;" class="table table-bordered table-responsive">\
												<thead>\
													<tr>\
														<th>Use Case</th>\
														<th>Farming System</th>\
														<th>Mandate Crops</th>\
														<th>Demand Partners</th>\
													</tr>\
												</thead>\
												<tbody>\
													<tr>\
														<th>TAAT</th>\
														<td>\
															Various\
														</td>\
														<td>\
															Various\
														</td>\
														<td>\
															<img src="img/partner/DPM-RGB.png" width="30" height="30"><br>\
															Demand Partner\
														</td>\
													</tr>\
												</tbody>\
											</table>\
										</div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['VNM'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top: 10px;" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/vnm.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom: 30px;"><h1>&nbsp &nbsp Vietnam Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Waitlisted Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
										<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
												<th>DSR EXTENSION - VIETNAM</th>\
												<td>\
													<span class="td-cell">\
														<img src="img/fsys/Rice-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">\
														Rice Based\
													</span>\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Rice-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Rice </span>\
													</span><br>\
												</td>\
												<td>\
													<span class="td-cell">\
														<img src="img/partner/NARES-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">\
														NARES Partners\
													</span>\
												</td>\
											</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['MAR'].includes(feature.properties['iso3'])) {
			var cc = '<div style="padding-top: 10px;" width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/flags/mar.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block; margin-bottom: 30px;"><h1>&nbsp Morocco Use Cases</h1></div>\
								<div class="accordion" id="accordionExample">\
								  <div class="accordion-item">\
									<h2 class="accordion-header" id="headingOne">\
									  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
										Transform Use Cases\
									  </button>\
									</h2>\
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\
									  <div class="accordion-body">\
										<table style="width:100%" class="table table-bordered table-responsive">\
											<thead>\
												<tr>\
													<th>Use Case</th>\
													<th>Farming System</th>\
													<th>Mandate Crops</th>\
													<th>Demand Partners</th>\
												</tr>\
											</thead>\
											<tbody>\
												<tr>\
												<th>MOROCCO - CAg</th>\
												<td>\
													<span class="td-cell">\
														<img src="img/fsys/Rainfed Mixed-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">\
														Rainfed Cereal\
													</span>\
												</td>\
												<td>\
													<span class="td-row">\
														<span class="td-cell">\
															<img src="img/crop/Wheat-RGB.png" width="25" height="25">\
														</span>\
														<span class="td-cell">Wheat  </span>\
													</span><br>\
												</td>\
												<td>\
													<span class="td-cell">\
														<img src="img/partner/NARES-RGB.png" width="30" height="30">\
													</span>\
													<span class="td-cell">\
														NARES Partners\
													</span>\
												</td>\
											</tr>\
											</tbody>\
										</table>\
									  </div>\
									</div>\
								  </div>\
								</div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else {};
	};

// Set data
var uc = new L.geoJSON(json_rmis_data_0, {
	interactive: true,
	style: styleUC,
	onEachFeature: contentUC,
});

// Add data to the map
map.addLayer(uc);
