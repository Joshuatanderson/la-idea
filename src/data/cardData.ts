import card from '../types/card';

import {
	aging,
	cardioMetabolic,
	cardioVascular,
	centerRedox,
	ceidr,
	clbd,
	cmtv,
	ctvo,
	insulinResistance,
	laCats,
	lbrn,
	maternalMortality,
	metabolicBasis,
	mObesity,
	mTranslational,
	regulationOcular,
	timingControl,
	visceralAdipose,
} from '../assets/awards/index';

export const cardData: card[] = [
	{
		// ids are the project ids from NIH
		awardType: 'COBRE',
		id: '5P30GM110703-05',
		img: cmtv,
		imgTitle: 'CMTV',
		expirationDate: '04/30/2021',
		title: 'Center for Molecular and Tumor Virology',
		investigator: 'Dr. Martin Sapp',
		investigatorLink:
			'https://www.lsuhs.edu/departments/school-of-graduate-studies/microbiology-and-immunology/research/sapp-lab',
		institution: 'LSUHSC Shreveport',
		institutionCode: 'lsuhs',
		institutionLink: 'https://www.lsuhs.edu/',
		fiscalYear: 2018,
		district: 'LA-04',
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9475805',
		fundingAmount: 963192,
	},
	{
		id: '5P30GM110760-05',
		title: 'Center for Experimental Infectious Disease Research',
		awardType: 'COBRE',
		img: ceidr,
		imgTitle: 'CEIDR',
		expirationDate: '04/30/2021',
		investigator: 'Dr. Joel Baines',
		investigatorLink:
			'https://www.lsuhs.edu/departments/school-of-graduate-studies/microbiology-and-immunology/research/sapp-lab',
		institution: 'LSU',
		institutionCode: 'lsu',
		institutionLink: 'https://www.lsuhsc.edu/',
		fiscalYear: 2018,
		district: 'LA-06',
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9476270',
		fundingAmount: 1113782,
	},
	{
		id: '5P30GM106392-05',
		img: cardioVascular,
		imgTitle: 'Mentoring in Cardiovascular Biology',
		expirationDate: '07/31/2020',
		title: 'Mentoring In Cardiovascular Biology',
		awardType: 'COBRE',
		investigator: 'Dr. Daniel Kapusta',
		investigatorLink:
			'https://www.medschool.lsuhsc.edu/neuroscience/faculty_detail.aspx?name=kapusta_daniel',
		institution: 'LSUHSC',
		institutionCode: 'lsuhsc',
		institutionLink: 'https://www.lsuhsc.edu/',
		fiscalYear: 2018,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9532864',
		district: 'LA-02',
		fundingAmount: 1096040,
	},
	{
		id: '1R15DK118515-01',
		img: insulinResistance,
		awardType: 'R15',
		imgTitle: 'Peripheral Insulin Resistance',
		expirationDate: '09/19/2021',
		title: 'Peripheral Insulin Resistance',
		investigator: 'Dr. Matthew Talbert',
		investigatorLink:
			'https://webservices.ulm.edu/facultyactivities/profile/talbert',
		institution: 'ULM',
		institutionCode: 'ulm',
		institutionLink: 'https://www.ulm.edu/',
		fiscalYear: 2018,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9590297',
		district: 'LA-05',
		fundingAmount: 352500,
	},
	{
		id: '5P20GM103424-18',
		awardType: 'INBRE',
		img: lbrn,
		imgTitle: 'LBRN',
		expirationDate: '04/30/2021',
		title: 'Louisiana Biological Research Network',
		investigator: 'Dr. Konstantin Kousoulas',
		investigatorLink: 'http://facultypages.vetmed.lsu.edu/faculty/vtgusk',
		institution: 'LSU',
		institutionCode: 'lsu',
		institutionLink: 'https://www.lsu.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9694241',
		district: 'LA-06',
		fundingAmount: 3643667,
	},
	{
		id: '5U54GM104940-04',
		awardType: 'CTSA',
		expirationDate: '06/30/2021',
		img: laCats,
		imgTitle: 'LACATS',
		title: 'Louisiana Clinical And Translational Science Center',
		investigator: 'Dr. John Kirwan',
		investigatorLink: 'https://www.pbrc.edu/about/executive-director/',
		institution: 'Pennington Biomedical',
		institutionCode: 'pennington',
		institutionLink: 'https://www.pbrc.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9733245',
		district: 'LA-06',
		fundingAmount: 4000000,
	},
	{
		id: '5P30GM114732-05',
		awardType: 'COBRE',
		img: mTranslational,
		imgTitle: 'Mentoring Translational Researchers In Louisiana',
		expirationDate: '',
		title: 'Mentoring Translational Researchers In Louisiana',
		investigator: 'Dr. Augusto Ochoa',
		investigatorLink:
			'https://www.medschool.lsuhsc.edu/biochemistry/faculty_detail.aspx?name=ochoa_augusto',
		institution: 'LSUHSC',
		institutionCode: 'lsuhsc',
		institutionLink: 'https://www.lsuhsc.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9733264',
		district: 'LA-02',
		fundingAmount: 1006977,
	},
	{
		id: '5P30GM118430-04',
		img: mObesity,
		awardType: 'COBRE',
		imgTitle: 'Mentoring Obesity And Diabetes Research In Louisiana',
		expirationDate: '07/31/2020',
		title: 'Mentoring Obesity And Diabetes Research In Louisiana',
		investigator: 'Dr. Thomas Gettys',
		investigatorLink:
			'https://www.pbrc.edu/research-and-faculty/faculty/?faculty=1412',
		institution: 'Pennington Biomedical',
		institutionCode: 'pennington',
		institutionLink: 'https://www.pbrc.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9741720',
		district: 'LA-06',
		fundingAmount: 1110000,
	},
	{
		id: '2R01EY021862-07A1',
		awardType: 'R01',
		img: regulationOcular,
		imgTitle: 'Regulation Of Ocular Angiogenesis By Micrornas',
		expirationDate: '06/30/2021',
		title: 'Regulation Of Ocular Angiogenesis By Micrornas',
		investigator: 'Dr. Shusheng Wang',
		investigatorLink: 'https://sse.tulane.edu/cell/faculty/wang',
		institution: 'Tulane',
		institutionCode: 'tulane',
		institutionLink: 'https://tulane.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9747585',
		district: 'LA-01',
		fundingAmount: 341063,
	},
	{
		id: '5R01HD096070-02',
		awardType: 'R01',
		img: maternalMortality,
		imgTitle: 'Impact Of State-Level Policies On Maternal Mortality',
		expirationDate: '',
		title: 'Impact Of State-Level Policies On Maternal Mortality',
		investigator: 'Dr. Maeve Wallace',
		investigatorLink: 'https://sph.tulane.edu/gchb/maeve-wallace',
		institution: 'Tulane',
		institutionCode: 'tulane',
		institutionLink: 'https://tulane.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9769804',
		district: 'LA-01',
		fundingAmount: 227250,
	},
	{
		id: '5R01GM124018-02',
		awardType: 'R01',
		img: timingControl,
		imgTitle: 'Timing Control Of Centromeric Cohesion',
		expirationDate: '08/31/2020',
		title: 'Timing Control Of Centromeric Cohesion',
		investigator: 'Dr. Hong Liu',
		investigatorLink:
			'https://medicine.tulane.edu/departments/biochemistry-molecular-biology-tulane-center-aging-tulane-cancer-center/faculty/hong-liu',
		institution: 'Tulane',
		institutionCode: 'tulane',
		institutionLink: 'https://tulane.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9781746',
		district: 'LA-01',
		fundingAmount: 318325,
	},
	{
		id: '1R15DK122383-01',
		img: visceralAdipose,
		awardType: 'R15',
		imgTitle: 'Visceral Adipose Tissue',
		expirationDate: '08/14/2022',
		title: 'Visceral Adipose Tissue',
		investigator: 'Dr. Xing Fu',
		investigatorLink: 'https://www.lsuagcenter.com/profiles/XFu1',
		institution: 'LSU',
		institutionCode: 'lsu',
		institutionLink: 'https://www.lsu.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9813320',
		district: 'LA-06',
		fundingAmount: 409391,
	},
	{
		id: '5P20GM130555-02',
		img: clbd,
		awardType: 'COBRE',
		imgTitle: 'CLBD',
		expirationDate: '12/31/2020',
		title: 'Center for Lung Biology and Disease',
		investigator: 'Dr. Samithamby "Jey" Jeyaseelan',
		investigatorLink: 'http://facultypages.vetmed.lsu.edu/faculty/jey',
		institution: 'LSU',
		institutionCode: 'lsu',
		institutionLink: 'https://www.lsuhsc.edu/',
		fiscalYear: 2020,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9844067',
		district: 'LA-06',
		fundingAmount: 2251189,
	},
	{
		id: '5P20GM121307-03',
		img: centerRedox,
		awardType: 'COBRE',
		imgTitle: 'Center for Redox Biology',
		expirationDate: '01/31/2021',
		title: 'Center for Redox Biology and Cardiovascular Disease',
		investigator: 'Dr. Christopher Kevil',
		investigatorLink: 'http://www.lsuhscardio.com/christopher-kevil-phd/',
		institution: 'LSUHSC Shreveport',
		institutionCode: 'lsuhs',
		institutionLink: 'https://www.lsuhs.edu/',
		fiscalYear: 2020,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9853025',
		district: 'LA-04',
		fundingAmount: 2090486,
	},
	{
		id: '1P20GM135002-01',
		img: metabolicBasis,
		awardType: 'COBRE',
		imgTitle: 'Metabolic Basis of Disease',
		expirationDate: '01/31/2021',
		title: 'Metabolic Basis of Disease',
		investigator: 'Dr. Jacqueline Stephens',
		investigatorLink:
			'https://www.lsu.edu/science/biosci/faculty_and_staff/stephens.php',
		institution: 'Pennington Biomedical',
		institutionCode: 'pennington',
		institutionLink: 'https://www.pbrc.edu/',
		fiscalYear: 2020,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9854381',
		district: 'LA-06',
		fundingAmount: 2471896,
	},
	{
		id: '5P20GM109036-05',
		awardType: 'COBRE',
		img: cardioMetabolic,
		imgTitle: 'Tulane Cobre For Cardiometabolic Diseases',
		expirationDate: '02/28/2021',
		title: 'Tulane Cobre For Cardiometabolic Diseases',
		investigator: 'Dr. Jiang He',
		investigatorLink: 'https://sph.tulane.edu/epid/jiang-he',
		institution: 'Tulane',
		institutionCode: 'tulane',
		institutionLink: 'https://tulane.edu/',
		fiscalYear: 2020,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9930637',
		district: 'LA-01',
		fundingAmount: 2191844,
	},
	{
		id: '5P20GM103629-09',
		img: aging,
		awardType: 'COBRE',
		imgTitle:
			'Mentoring Research Excellence In Aging And Regenerative Medicine',
		expirationDate: '05/31/2021',
		title: 'Mentoring Research Excellence In Aging And Regenerative Medicine',
		investigator: 'Dr. Michal Jazwinski',
		investigatorLink:
			'https://medicine.tulane.edu/departments/medicine-general-internal-medicine-geriatrics-diabetes-research-tulane-center-aging',
		institution: 'Tulane',
		institutionCode: 'tulane',
		institutionLink: 'https://tulane.edu/',
		fiscalYear: 2020,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9932369',
		district: 'LA-01',
		fundingAmount: 2253030,
	},
	{
		id: '3P20GM103424-18S1',
		img: lbrn,
		awardType: 'INBRE Supplement',
		imgTitle: 'LBRN',
		expirationDate: '04/30/2021',
		title: 'Louisiana Biomedical Research Network',
		investigator: 'Dr. Konstantin Kousoulas',
		investigatorLink: 'http://facultypages.vetmed.lsu.edu/faculty/vtgusk',
		institution: 'LSU',
		institutionCode: 'lsu',
		institutionLink: 'https://www.lsu.edu/',
		fiscalYear: 2019,
		grantLink:
			'https://projectreporter.nih.gov/project_info_description.cfm?aid=9981342',
		district: 'LA-06',
		fundingAmount: 152100,
	},
];
