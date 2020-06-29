import {ceidr, clbd, ctvo, laCats} from '../../assets/awards/index'; // TODO:
// take images for all award cards
// create image titles for all award cards
export const cardDataNew = [
	{
		// ids are the project ids from NIH
		id: '5P30GM110703-05',
		img: "",
		imgTitle: "",
		title: 'Center for Molecular and Tumor Virology',
		investigator: 'Dr. Martin Sapp',
		investigatorLink:
			'https://www.lsuhs.edu/departments/school-of-graduate-studies/microbiology-and-immunology/research/sapp-lab',
		institution: 'LSUHSC Shreveport',
		institutionLink: 'https://www.lsuhs.edu/',
		fiscalYear: 2018,
		district: 'LA-04',
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9475805',
		fundingAmount: '$963,192',
	},
	{
		id: '5P30GM110760-05',
		img: ceidr,
		imgTitle: "CEIDR",
		title: 'Center For Experimental Infectious Disease Research',
		investigator: 'Dr. Joel Baines',
		investigatorLink:
			'https://www.lsuhs.edu/departments/school-of-graduate-studies/microbiology-and-immunology/research/sapp-lab',
		institution: 'LSUHSC',
		institutionLink: 'https://www.lsuhsc.edu/',
		fiscalYear: 2018,
		district: 'LA-06',
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9476270',
		fundingAmount: '$1,113,782',
	},
	{
		id: '5P30GM106392-05',
		img: "",
		imgTitle: "",
		title: 'Mentoring In Cardiovascular Biology',
		investigator: 'Dr. Daniel Kapusta',
		investigatorLink:
			'https://www.medschool.lsuhsc.edu/neuroscience/faculty_detail.aspx?name=kapusta_daniel',
		institution: 'LSUHSC',
		institutionLink: 'https://www.lsuhsc.edu/',
		fiscalYear: 2018,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9532864',
		district: 'LA-02',
		fundingAmount: '$1,096,040',
	},
	{
		id: '1R15DK118515-01',
		img: "",
		imgTitle: "",
		title: 'Peripheral Insulin Resistance',
		investigator: 'Dr. Matthew Talbert',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjbxIbkyaXqAhWBKs0KHfcEDUYQFjADegQIAxAB&url=https%3A%2F%2Fwebservices.ulm.edu%2Ffacultyactivities%2Fprofile%2Ftalbert&usg=AOvVaw3wlY6hWwuFfp2caW2LzfMT',
		institution: 'ULM',
		institutionLink: 'https://www.ulm.edu/',
		fiscalYear: 2018,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9590297',
		district: 'LA-05',
		fundingAmount: '$352,500',
	},
	{
		id: '5P20GM103424-18',
		img: "",
		imgTitle: "LBRN",
		title: 'Louisiana Biological Research Network',
		investigator: 'Dr. Konstantin Kousoulas',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjnut_xyaXqAhXaLc0KHcALAe4QFjAAegQIAxAB&url=http%3A%2F%2Ffacultypages.vetmed.lsu.edu%2Ffaculty%2Fvtgusk&usg=AOvVaw0tLO7hXDWd50YMc--mVxV8',
		institution: 'LSUHSC',
		institutionLink: 'https://www.lsuhsc.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9694241',
		district: 'LA-06',
		fundingAmount: '$3,643,667',
	},
	{
		id: '5U54GM104940-04',
		img: laCats,
		imgTitle: "LACATS",
		title: 'Louisiana Clinical And Translational Science Center',
		investigator: 'Dr. John Kirwan',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwilg9n4yaXqAhUBBs0KHeIlCaoQFjABegQIARAB&url=https%3A%2F%2Fwww.pbrc.edu%2Fabout%2Fexecutive-director%2F&usg=AOvVaw16laZX3hI6KzE29Dux7B5y',
		institution: 'Pennington Biomedical',
		institutionLink: 'https://www.pbrc.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9733245',
		district: 'LA-06',
		fundingAmount: '$4,000,000',
	},
	{
		id: '5P30GM114732-05',
		img: "",
		imgTitle: "",
		title: 'Mentoring Translational Researchers In Louisiana',
		investigator: 'Dr. Augusto Ochoa',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiNquKAyqXqAhWVHc0KHco2BDIQFjAAegQIAxAB&url=https%3A%2F%2Fwww.medschool.lsuhsc.edu%2Fbiochemistry%2Ffaculty_detail.aspx%3Fname%3Dochoa_augusto&usg=AOvVaw1leB_L-e3KF56xRzbRZAMI',
		institution: 'LSUHSC',
		institutionLink: 'https://www.lsuhsc.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9733264',
		district: 'LA-02',
		fundingAmount: '$1,006,977',
	},
	{
		id: '5P30GM118430-04',
		img: "",
		imgTitle: "",
		title: 'Mentoring Obesity And Diabetes Research In Louisiana',
		investigator: 'Dr. Thomas Gettys',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwisqJaGyqXqAhVHbc0KHWCcB4MQFjAAegQIARAB&url=https%3A%2F%2Fwww.pbrc.edu%2Fresearch-and-faculty%2Ffaculty%2F%3Ffaculty%3D1412&usg=AOvVaw17QxOmDWpIS5BRQhlV-j6s',
		institution: 'Pennington Biomedical',
		institutionLink: 'https://www.pbrc.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9741720',
		district: 'LA-06',
		fundingAmount: '$1,110,000',
	},
	{
		id: '2R01EY021862-07A1',
		img: "",
		imgTitle: "",
		title: 'Regulation Of Ocular Angiogenesis By Micrornas',
		investigator: 'Dr. Shusheng Wang',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjNj8uMyqXqAhWPGs0KHX4LAUcQFjAAegQIBhAB&url=https%3A%2F%2Fsse.tulane.edu%2Fcell%2Ffaculty%2Fwang&usg=AOvVaw2bTpw8kcGNkNgiBQNdKRdz',
		institution: 'Tulane',
		institutionLink: 'https://tulane.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9747585',
		district: 'LA-01',
		fundingAmount: '$341,063',
	},
	{
		id: '5R01HD096070-02',
		img: "",
		imgTitle: "",
		title: 'Impact Of State-Level Policies On Maternal Mortality',
		investigator: 'Dr. Maeve Wallace',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjD5buTyqXqAhXHGs0KHSycDJ8QFjAAegQIARAB&url=https%3A%2F%2Fsph.tulane.edu%2Fgchb%2Fmaeve-wallace&usg=AOvVaw0eQnJufKqdWqIdLMnUh5ZG',
		institution: 'Tulane',
		institutionLink: 'https://tulane.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9769804',
		district: 'LA-01',
		fundingAmount: '$227,250',
	},
	{
		id: '5R01GM124018-02',
		img: "",
		imgTitle: "",
		title: 'Timing Control Of Centromeric Cohesion',
		investigator: 'Dr. Hong Liu',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjIyIObyqXqAhVKWs0KHYukChoQFjABegQIAhAB&url=https%3A%2F%2Fmedicine.tulane.edu%2Fdepartments%2Fbiochemistry-molecular-biology-tulane-center-aging-tulane-cancer-center%2Ffaculty%2Fhong-liu&usg=AOvVaw2UgEobXRz4xAJi5MktxbWx',
		institution: 'Tulane',
		institutionLink: 'https://tulane.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9781746',
		district: 'LA-01',
		fundingAmount: '$318,325',
	},
	{
		id: '1R15DK122383-01',
		img: "",
		imgTitle: "",
		title: 'Visceral Adipose Tissue',
		investigator: 'Dr. Xing Fu',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjr9v2jyqXqAhVJK80KHcgvCuEQFjAAegQIBBAB&url=https%3A%2F%2Fwww.lsuagcenter.com%2Fprofiles%2FXFu1&usg=AOvVaw0dw0jJ85K0paCNVZT78GYD',
		institution: 'LSU',
		institutionLink: 'https://www.lsu.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9813320',
		district: 'LA-06',
		fundingAmount: '$409,391',
	},
	{
		id: '5P20GM130555-02',
		img: clbd,
		imgTitle: "CLBD",
		title: 'Center for Lung Biology and Disease',
		investigator: 'Dr. Samithamby "Jey" Jeyaseelan',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjX-oeuyqXqAhWCXM0KHTxeC9YQFjAAegQIBhAB&url=http%3A%2F%2Ffacultypages.vetmed.lsu.edu%2Ffaculty%2Fjey&usg=AOvVaw3LfRw8iEzBDUp07K2wFeXh',
		institution: 'LSUHSC',
		institutionLink: 'https://www.lsuhsc.edu/',
		fiscalYear: 2020,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9844067',
		district: 'LA-06',
		fundingAmount: '$2,251,189',
	},
	{
		id: '5P20GM121307-03',
		img: "",
		imgTitle: "",
		title: 'Center for Redox Biology and Cardiovascular Disease',
		investigator: 'Dr. Christopher Kevil',
		investigatorLink: 'http://www.lsuhscardio.com/christopher-kevil-phd/',
		institution: 'LSUHSC Shreveport',
		institutionLink: 'https://www.lsuhs.edu/',
		fiscalYear: 2020,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9853025',
		district: 'LA-04',
		fundingAmount: '$2,090,486',
	},
	{
		id: '1P20GM135002-01',
		img: "",
		imgTitle: "",
		title: 'Metabolic Basis of Disease',
		investigator: 'Dr. Jacqueline Stephens',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjKzNHIyqXqAhVNbs0KHSpWBh0QFjAAegQIARAC&url=https%3A%2F%2Fwww.lsu.edu%2Fscience%2Fbiosci%2Ffaculty_and_staff%2Fstephens.php&usg=AOvVaw3nQC_xOn6lI0pZAfwi8Jzy',
		institution: 'Pennington Biomedical',
		institutionLink: 'https://www.pbrc.edu/',
		fiscalYear: 2020,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9854381',
		district: 'LA-06',
		fundingAmount: '$2,471,896',
	},
	{
		id: '5P20GM109036-05',
		img: "",
		imgTitle: "",
		title: 'Tulane Cobre For Cardiometabolic Diseases',
		investigator: 'Dr. Jiang He',
		investigatorLink: 'https://sph.tulane.edu/epid/jiang-he',
		institution: 'Tulane',
		institutionLink: 'https://tulane.edu/',
		fiscalYear: 2020,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9930637',
		district: 'LA-01',
		fundingAmount: '$2,191,844',
	},
	{
		id: '5P20GM103629-09',
		img: "",
		imgTitle: "",
		title: 'Mentoring Research Excellence In Aging And Regenerative Medicine',
		investigator: 'Dr. Michal Jazwinski',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiiuKzUyqXqAhWCBc0KHVC-BV4QFjAAegQIAxAB&url=https%3A%2F%2Fmedicine.tulane.edu%2Fdepartments%2Fmedicine-general-internal-medicine-geriatrics-diabetes-research-tulane-center-aging&usg=AOvVaw1-yYYEdL1ksTxgdEH0OzKs',
		institution: 'Tulane',
		institutionLink: 'https://tulane.edu/',
		fiscalYear: 2020,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9932369',
		district: 'LA-01',
		fundingAmount: '$2,253,030',
	},
	{
		id: '3P20GM103424-18S1',
		img: "",
		imgTitle: "LBRN",
		title: 'Louisiana Biomedical Research Network',
		investigator: 'Dr. Konstantin Kousoulas',
		investigatorLink:
			'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiejvveyqXqAhUOAZ0JHdyYBaIQFjAAegQIARAB&url=http%3A%2F%2Ffacultypages.vetmed.lsu.edu%2Ffaculty%2Fvtgusk&usg=AOvVaw0tLO7hXDWd50YMc--mVxV8',
		institution: 'LSUHSC',
		institutionLink: 'https://www.lsuhsc.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9981342',
		district: 'LA-06',
		fundingAmount: '$152,100',
	},
];
