% This is a cut down version of the problem CardanoSentiment, useful for code examples and unit tests
% The train set is reduced from 74 cases to 20 cases and the test set is reduced from 33 to 20
%
@problemName CardanoSentiment
@timestamps false
@univariate false
@equalLength true
@seriesLength 24
@targetlabel true
@data
0.504,0.49339,0.49221,0.49398,0.49497,0.49406,0.47069,0.47184,0.4698,0.46952,0.46949,0.4651,0.46697,0.46542,0.46606,0.46671,0.47377,0.46768,0.46535,0.46581,0.4614,0.45005,0.45377,0.45153:4339.96019453,3458.78402329,1076.28864373,4028.4664828,8608.26949912,7743.65518851,19278.22123838,4850.00758139,8757.6435729,7961.80724415,6018.27283368,55807.78741286,3956.25279201,68208.48446332,46085.27912307,27812.49954019,47153.57873531,32447.75854817,4371.97382368,18197.75765497,24541.22728955,63705.97794746,2951.56190702,2611.96007103:0.0589
0.46542,0.46349,0.46349,0.46686,0.46686,0.46686,0.4779,0.48095,0.47826,0.47527,0.46953,0.4656,0.47209,0.47383,0.47145,0.45151,0.4458,0.44275,0.44446,0.44423,0.44431,0.445,0.43958,0.43186:0.0,3261.35590947,0.0,63.477182,0.0,0.0,10883.58087659,2649.50045105,61.33205787,7918.92722233,9552.5740597,416.36873487,10118.96055022,119477.0002,31986.85900069,276581.30348592,69437.4288543,11849.15408058,18459.61351056,1424.85010017,1199.06920205,5180.29566072,6420.33947015,71986.64642679:-0.1002
0.4723,0.47486,0.47091,0.47453,0.47453,0.47453,0.46208,0.46528,0.4694,0.4694,0.47099,0.46702,0.4632,0.46084,0.47154,0.46391,0.46047,0.46067,0.46512,0.46533,0.46791,0.47012,0.46634,0.46442:1142.28217909,41.33357727,368.5908648,617.13771306,0.0,0.0,444.19704519,213.85507651,8058.093154,0.0,1183.34490332,1069.01726352,2000.0,1030.3145327,30.0,1812.43070307,8966.29247468,607.95436609,1629.49328827,1495.4211678,621.77628509,260.85234043,23315.51906028,14333.90473687:-0.422
0.7909,0.78245,0.78647,0.78491,0.78353,0.79108,0.79243,0.79243,0.79243,0.78645,0.78645,0.77267,0.77398,0.7814,0.77977,0.77494,0.77346,0.7778,0.76758,0.77918,0.77918,0.78454,0.78717,0.78717:2174.53192982,20534.84246024,501.4732,2133.504026,3004.65892592,3619.15819537,12474.78676966,0.0,0.0,247.96202531,0.0,196.00139082,24.426303,67317.10452458,4503.08449779,9766.3503143,12777.96154267,92.0826562,7164.82996942,6082.05874017,0.0,30026.24650334,1861.99559096,0.0:0.5667
0.93865,0.93865,0.94999,0.94642,0.94585,0.93756,0.93841,0.93841,0.94974,0.946,0.95678,0.95673,0.95858,0.97,0.95905,0.95832,0.94937,0.94937,0.94937,0.93375,0.91747,0.91559,0.90748,0.90569:2131.29530953,0.0,35.95428845,58.54393,1057.31278037,8017.43371278,1048.95285193,0.0,7463.53839847,1283.93306075,35.95428844,4997.51367446,17612.90721486,8658.96799293,16978.73577975,7058.41223729,11032.07772466,0.0,0.0,17994.7755769,31013.33154458,4104.87352119,3158.77686443,3574.65888979:0.3893
0.4671,0.46726,0.46685,0.46685,0.44913,0.4495,0.44957,0.45693,0.45742,0.45387,0.45387,0.446,0.44717,0.45026,0.44551,0.44414,0.44766,0.44766,0.44945,0.44945,0.45538,0.45083,0.44927,0.44927:3927.17145197,1154.83840745,912.73901588,0.0,1371.82516726,3600.09109542,817.05680877,26508.42796393,4158.03239379,1411.77113096,0.0,3542.13004484,409.3851922,32830.17311212,102599.62772827,429.36537363,771.92862591,0.0,210.31785515,0.0,47.63241995,62.90222478,50042.41262492,0.0:-0.296
0.45781,0.43883,0.4566,0.47234,0.4625,0.4901,0.49984,0.51554,0.50404,0.49388,0.49906,0.48762,0.49629,0.49479,0.50001,0.50243,0.49347,0.48588,0.48086,0.48086,0.46573,0.461,0.46752,0.4855:21.73445315,11133.62283516,34341.65983601,55.31197609,55084.87338391,36648.65334875,19601.31807285,85304.50455648,11083.33058074,54050.89141005,8563.64850542,68683.29363461,25819.973476,40493.60396673,8927.0842703,106690.14739063,86104.19759013,15821.70649738,17534.13089181,0.0,11507.2196162,50301.61042653,3811.68820098,79670.53531286:-0.1081
0.46832,0.46509,0.4652,0.4652,0.46489,0.46708,0.46775,0.46471,0.45743,0.45552,0.4551,0.45335,0.44868,0.44863,0.4481,0.445,0.45007,0.4493,0.45169,0.4578,0.45928,0.45745,0.4558,0.45683:30758.23996302,2262.06165933,88.866624,0.0,43967.56830826,1069.42921176,5108.15769148,7577.32352558,10695.97155398,5539.16320954,1113.50136938,7437.14504429,5648.93507676,19750.64036086,10635.05412485,1260.0,3971.9687097,7826.20459918,7247.25267011,163560.11176317,57506.19411865,816.45166248,1361.85683744,27.4850071:0.0825
0.48854,0.494,0.47931,0.47934,0.48517,0.48783,0.48774,0.48976,0.48923,0.48923,0.48728,0.48213,0.48638,0.48486,0.48006,0.48326,0.4928,0.48734,0.49037,0.49474,0.49785,0.49919,0.49588,0.49989:9897.46193171,71333.76774065,2848.47436134,22606.76473308,23844.74414385,56.25595863,204.51597162,1925.53936257,6399.97740203,0.0,39.0,4474.82532721,5618.13665709,1469.41716385,6646.38660754,8686.83465311,60909.82365981,42521.49023432,6843.54469478,5529.52226915,31852.9779407,18198.48064037,30.68214545,2434.79880862:0.579
0.63,0.62466,0.61449,0.6,0.5961,0.59966,0.60994,0.60439,0.60954,0.61878,0.60991,0.60538,0.60445,0.60535,0.58224,0.56724,0.56567,0.56385,0.55329,0.55885,0.54624,0.54576,0.54561,0.55903:59370.8213601,74191.22139894,3554.62232066,26381.30771759,30283.33903775,44.6726654,14122.71365102,5455.0,3025.49600182,43877.14949268,2849.75590456,17787.9326533,828.60345867,244361.32109547,77272.66011247,19395.12073604,38178.29458487,14662.64898856,13996.33862721,29209.98196401,48431.39117105,17988.81843322,10760.7879516,1478.60129469:0.2467
1.15843,1.15105,1.15881,1.1597,1.165,1.17212,1.17212,1.16603,1.16854,1.16553,1.16831,1.17316,1.17993,1.17852,1.17284,1.18209,1.17467,1.18383,1.18062,1.18232,1.18313,1.18408,1.19039,1.18935:1309.6142179,7678.38392521,20.329727,73.290655,6263.75915528,64.536255,0.0,1310.87490199,63.11059463,8069.1419869,630.04629052,417.79026045,407.40940512,59695.08876918,501.50184434,365.16405921,46.44842934,75.87268442,2939.55411438,2171.78294152,258.94236684,902.92597617,3153.81201747,1377.64968649:-0.44
0.50879,0.51078,0.49999,0.49228,0.4905,0.49654,0.49654,0.49654,0.4915,0.49037,0.49622,0.49622,0.49366,0.49438,0.49438,0.49839,0.50893,0.50372,0.50405,0.50129,0.50026,0.50162,0.5006,0.49649:80.69372,244.74301,2746.8320737,1136.33944355,68.0,141.07574414,0.0,0.0,238.49274824,206.25617786,3913.97307817,0.0,35.0,410.87730061,0.0,125.25001384,12634.36266528,3739.06710094,826.96282965,877.16719717,99.50385468,1235.14877479,15345.29620165,4666.44006311:0.1978
0.47799,0.4958,0.50813,0.50913,0.51247,0.5178,0.5178,0.52021,0.52014,0.51663,0.51939,0.5266,0.53774,0.53774,0.53344,0.53678,0.53564,0.53439,0.53439,0.53463,0.55018,0.55874,0.56332,0.57195:85.7156,84182.47690692,9975.09903892,537.47869518,3936.73164167,9968.34829654,90637.2770569,4241.89444513,15602.44694374,214.60227321,5482.0,3816.32299094,74135.75498012,0.0,93285.00576052,4458.07626583,228.45124349,1958.78686407,5876.69004432,2791.72008678,21323.62988639,77102.90610268,587.70654323,12968.61921167:0.1592
0.48193,0.46064,0.46118,0.46118,0.47182,0.45173,0.46013,0.46342,0.45779,0.45943,0.46007,0.4626,0.47306,0.47254,0.47105,0.46253,0.45803,0.45256,0.44594,0.45708,0.45829,0.45695,0.45907,0.45907:0.0,15132.34379898,7104.50847006,0.0,10859.54372304,4517.54626527,2523.72410533,22659.42201111,2267.42497299,43.31563023,1907.1455675,10565.57617016,30639.65700729,5044.14418938,100075.512073,17656.64782732,14271.26937444,37801.99801476,14653.92227017,195386.16395233,44994.13257051,696.6561,46.0,0.0:-0.494
1.15411,1.15452,1.14627,1.14627,1.14627,1.15617,1.15529,1.15529,1.14589,1.14,1.12381,1.11809,1.119,1.1057,1.11,1.09232,1.0773,1.07234,1.09465,1.09527,1.09371,1.09488,1.07016,1.04777:43630.03513689,26.796861,12755.93359077,0.0,0.0,1229.64818821,397.0793842,0.0,2706.12471429,10912.02959798,5094.62784769,24687.6223235,16062.46782945,8810.14816691,9157.57943312,19688.2692049,44083.61378294,24392.67380429,15936.09601919,681.94983613,4603.33532873,743.45743756,1598.69532512,7087.83031441:0.2737
0.91419,0.91419,0.9243,0.9243,0.88797,0.88601,0.88121,0.87914,0.88438,0.882,0.88841,0.88831,0.90107,0.90107,0.90401,0.89954,0.89625,0.91561,0.93555,0.92832,0.92888,0.93454,0.93,0.93639:0.0,0.0,40.159748,0.0,84115.05065744,78869.76977658,32805.49308117,31897.80151909,6726.06895896,23733.63734882,700.93968624,1726.19504655,4107.16873042,3381.69382236,1829.27646428,552.26817511,1799.65426357,1897.30136124,8704.31091281,5000.0,578.73998794,170.870052,543.94562804,30549.76575678:-0.432
0.95191,0.95191,0.95191,0.95191,0.93905,0.93905,0.94813,0.94738,0.94887,0.95105,0.96523,0.96746,0.97251,0.95665,0.95762,0.94521,0.9449,0.94459,0.93552,0.93849,0.935,0.94074,0.94074,0.94074:3677.08441119,0.0,0.0,0.0,6196.97570784,0.0,54.84661483,538.79938356,1463.59149027,3063.72369293,3171.20111839,4270.70162533,61510.26706341,3813.32617782,9187.64983353,1966.92881987,10663.00895842,95.08925565,98.7265345,266.49142548,10.64197727,6942.15331449,0.0,0.0:0.1843
0.51539,0.51539,0.51539,0.51539,0.52184,0.52184,0.51736,0.51959,0.51111,0.51371,0.51326,0.51472,0.51504,0.49589,0.50395,0.5172,0.51426,0.50684,0.50772,0.51403,0.51278,0.51939,0.51939,0.52374:2322.77273094,0.0,0.0,0.0,21421.50871645,0.0,1884.7287034,3880.0,1430.3652834,836.50277228,1613.0,2144.73162727,1001.4389,39128.82893269,52230.12738183,39380.72294801,3273.90931372,4370.8215,5903.62814,54104.806,296.01915514,408.84151959,0.0,50.0:0.765
0.52353,0.52353,0.52353,0.52353,0.52353,0.52353,0.52353,0.52866,0.53305,0.54255,0.54594,0.54479,0.54477,0.5452,0.53955,0.53678,0.53332,0.53309,0.53592,0.5337,0.53763,0.53597,0.5396,0.54386:0.0,0.0,0.0,0.0,0.0,0.0,0.0,10002.0,5503.48662864,44107.75281464,6749.28231589,53.32732119,22363.88584122,801.0,329.8742992,15435.13145596,63378.72425258,19350.07601173,9323.17437866,10278.36877316,291.41348139,7707.58555611,4944.2505,47.0881:0.0
1.045,1.06027,1.05407,1.05407,1.06995,1.06019,1.07657,1.09018,1.09018,1.075,1.075,1.09441,1.08816,1.07758,1.07777,1.07027,1.08307,1.08835,1.083,1.08173,1.08432,1.07841,1.08558,1.09059:8263.2974167,7760.55485942,2002.3976,0.0,460.78360109,1601.63190608,1416.07245021,8664.17823116,0.0,4370.15768675,0.0,3726.2986726,9818.6128,57.66105624,1385.52006354,14524.74205148,1448.82494927,183.32443607,12010.01890359,5472.56915692,6295.09130393,1432.26817798,29.833206,4856.60476723:-0.021
