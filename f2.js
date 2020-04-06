var techS={
            dim:{
			        olen:{
				         type: "mm";
						  len:3500;
						   }
				    owid:{
				         type:"mm";
						  len:1600;
						   }
				    oht:{
				     type:"mm";
					  len:1490;
					   }
					 wb:{
					       type:"mm";
						    len:2360;
							 }
					tw:{
							    front:{
								    type:"mm";
									  len:1405;
									   }
									   rear:{
									      type:"mm";
										   len:1400;
										    }
											}
										minTrad:
										   {
										     type:"mm";
											  len:170;
											   }
                                      }
									  
			cap:{
				      sc:{
					      type:"persons";
						   no:5;
						    }
							fcap:{
							    type:"litres";
								 cap:35;
								   }
								   
								   }
			engine:{
				    type1:
					   {
					     type:"KB-Series";
						  n:3;
						   v:12;
						     capa:{
							    type:"cc/cm^3";
								  cappp=998;
								   }
								   bore:{
								     type:"mm^2";
									  dimm=73.0*79.5;
									    }
									
						r=10:1;
						 maxPower:{
						   type:"ps/rpm";
						    p=(67/6200);
							  }
							  maxT:{
							    type:"Nm/rpm";
								  T=(90/3500);
								    }
									fD:"MultipInjection";
									}
			Transmission:{
				    type:"S_Speed MT";
					  }
			chassls:{
				     steering:"Rack & Pinion,Power assisted";
					  brakes:{
					       front:"ventilated discs";
						    rear: "drums";
							   }
							   suspension:{
							      f:"macpherson";
								   r:"isolated coil";
								    }
									shock:"gas filled";
									 tyre:{
									   type:"tubeless";
									    r=(155/80);
										 }
										 }
			weights:{
				        kerb:{
						    type:"Kg";
							 r=860;
							  }
							  gValue:{
							     type:"Kg";
								   a=1320;
								    }
									 }
 				};
			  
	