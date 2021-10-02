import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Top Adventures Trekking Packages in India',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Package 5000/- 
                  </div>
                <h3 className="mt-0 mb-12">
                Kedarkantha Trek
                  </h3>
                <p className="m-0">
                Correctly entitled as the Queen of Winter Treks for its 12,500 ft. altitude.
                <ul>
                    <li>Day 1 : Dehradun → Sankri | Drive Distance: 187 kms | Duration: 6-7 hours | Elevation: 1950m 
                    </li>
 		                <li>Day 2 : Sankri → Juda Ka Talab | Trek Distance: 4 kms | Duration: 3 - 4 hours | Elevation: 2786m 
                      </li>
                    <li>Day 3 : Juda Ka Talab → Base Camp | Trek Distance: 4 kms | Duration: 4 - 5 hours | Elevation: 3430m 
                    </li>
                    <li>Day 4 : Base Camp → Kedar Kantha Summit | Trek Distance: 6 kms | Duration: 6-7 hours | Elevation: 3800m 
                      The ultimate adventure begins by starting early in the morning, it will take anywhere between 7 to 8 hours to get to the summit.
                    </li>
                    <li> Day 5 : Base Camp → Sankri | Trek Distance: 6 kms | Duration: 4 - 5 hours | Elevation: 1950m         
                    </li>
                    <li> Day 6 : Sankri → Dehradun | Drive Distance: 187 kms | Duration: 6-7 hours | Elevation: 640m                      
                        Kedarkantha trek package ends here with beautiful memories.</li>
                  </ul>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Package 6000/-
                  </div>
                <h3 className="mt-0 mb-12">
                  Bali Pass Treck
                  </h3>
                <p className="m-0">
                Bali Pass Trek is for those who wish to hike to different and less travelled paths. 
                It is difficult, It challenges us in every way through drastically changing terrians, narrow paths, dangerous descend, long hours of walking.
                
                <ul>
                  <li>Day 1 : The ancient villages of Osla and Gangad take you back in time.
                      The ancient temples at Osla have riveting Himachali architecture that can keep you absorbed for a long time.
                  </li>
 		              <li>Day 2 : The alpine meadows of Devsu Thach in middle of the Ruinsara Forest are a grand surprise of the trek.
                  </li>
                  <li>Day 3 : The trail from Devsu Thach to Ruinsara Lake, meandering next to the Ruinsara River
                      The valley is narrow and one can be excused for comparing it with Rishi Gorge from Nanda Devi Sanctuary, although it isn’t as difficult as the latter.
                  </li>
                  <li>Day 4 : The Ruinsara Lake is a special glacial lake
                      Resting amidst beautiful mountain ranges of Swaragrohini, the lake is serene and calming. The meadows around are neat and untouched. 
                  </li>
                  <li>Day 5 : The challenging approach to Bali Pass
                      Like most Himalayan pass crossings, it is best done in either pre or post monsoon seasons.
                  </li>
                </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Package 3000/-
                  </div>
                <h3 className="mt-0 mb-12">
                Baraadsar Lake
                  </h3>
                <p className="m-0">                  
                  The Baraadsar Lake is a sacred lake that lies on the border of Uttarakhand and Himachal Pradesh tucked between the Rupin and Supin valleys in the Western Garhwal Himalayas. 
                  <ul>
                   <li>Day 1 : Arrival in Sankri.
                   </li>
 		               <li>Day 2 : Sankri → Pithari (8084 ft) - 3 hrs drive. Trek from Pithari to Barthatra thatch (9485 ft) - 2.6 km, 3 hrs. trek.
                   </li>
                   <li>Day 3 : Barthatra Thatch (9845 ft) → Dhaldhar Meadows (11,916 ft) - 4.17 km, 5 hrs
                   </li>
                   <li>Day 4 : Dhaldhar Meadows (11,916 ft) → Devbasa (12,267 ft) - 6km, 5 hrs.                      
                   </li>
                   <li>Day 5 : Devbasa (12,267 ft) → Baraadsar Lake (14,764 ft) via Baraadsar Summit (15,092 ft) and back to Devbasa. - 7.7 km, 10 hrs
                   </li>
                   <li>Day 6 : Devbasa (12,267 ft) → Vasaped (10,076 ft) - 11 km, 7 hrs.
                   </li>
                   <li>Day 7 : Vasaped (10,076 ft) → Bhitri (7743 ft) via Saaru Taal - 8.2 km, 5 hrs
                   </li>
                   <li>Day 8 : Bhitri → Dehradun - 200 km Drive
                   </li>
                  </ul></p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Package 4500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Nagtibba Trek
                  </h3>
                <p className="m-0">
                  Nagtibba is located at an altitude od 3025 mts and attracts thousands of tourists every year.
                  <ul>
                    <li>Day 1 : Arrival at Pantwari Village → Trek to Nag Tibba Base Camp </li>
 		                <li>Day 2 : Nag Tibba Base Camp → Nag Tibba Summit → Nag Tibba Base Camp </li>
                    <li>Day 3 : Nag Tibba Base Camp → Pantwari </li>
                  </ul></p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-04.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Package 3500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Dayarabugyal Trek
                  </h3>
                <p className="m-0">
                Ideal trek for long weekends, Dayara Bugyal can be a perfect start for beginners. 
                <li> Day 1 : Barnala tal → Dayara bugyal</li>
                <li> Day 2 : Dayara bugyal → Bakaria top → Dayara bugyal</li>
                <li> Day 3 : Dayara bugyal → Baranala tal → Barsu → Uttarkshi</li>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Package 5500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Har Ki Dun Trek
                  </h3>
                <p className="m-0">
                It has terrific ancient culture, mountain views, forests, grasslands, meadows, rivers, streams and even an alpine lake.
                 This trail is not difficult on the legs which makes it just the right adventure especially when compared to other summer treks.<ul>
                    <li> Day 1 : Taluka → Gangad </li>
                    <li> Day2 : 2. The meadows of Kalkatiyadhar </li>
                  <li> Day 3 : The stories of the ancient villages </li>
                  <li> Day 4 : Devsu Thatch: The best kept secret of the trek </li>
                  <li> Day 5 : Har Ki Dun and Ruinsara Tal valleys</li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-06.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Package 3500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Borasu Pass Trek
                  </h3>
                <p className="m-0">
                Situated at an elevation of 5480 meters, Borasu is a high altitude pass that bisects the border between Uttarakhand and Himachal
                 Pradesh. It is the pass that connected Tons valley in Uttarakhand to Baspa river valley.<ul>
                    <li> Day 1 : Dehradun → Sankri</li>
 		                <li> Day 2 : Sankri → Seema</li>
                    <li> Day 3 : Seema/Osla → Har ki Dun</li>
                    <li> Day 4 : Har ki dun → Ratha</li>
                    <li> Day 5 : Ratha → Borasu pass base camp</li>
                    <li> Day 6 : Borasu pass base camp → Bonga</li>
                    <li> Day 7 : Bonga → Chitkul</li>
              </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Package 5500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Vijay Top Trek
                  </h3>
                <p className="m-0">
                Vijay Top lies at an elevation of 3878 metres in the famous Govind Wildlife Sanctuary of Uttarkashi district. It is not
                 known much by people but this trek has all the qualities which Kedarkantha Trek possesses. But the only difference is, the
                  trails are untouched and not traversed by many, if you want to be away from the cacophony of cities and other groups of trekkers
                   on the trek routes, then this winter choose “Vijay Top”.<ul>
                    <li> Day 1 : Dehradun → Himari (207 km) (7/8 hours) (5,100 feet)</li>
 		                <li> Day 2 : Himari → Sarutal (7 km) (5/6 hours) (2000 m)</li>
                    <li> Day 3 : Sarutal → Badang (8 km) (5/6 hours) (2600 m)</li>
                    <li> Day 4 : Badang → Vijay Top (3878 m) and back (6 hours)</li>
                    <li> Day 5 : Badang → Sarutal (8 km) (5/6 hours) (2000 m)</li>
                    <li> Day 6 : Sarutal → Bhitri Village and Depart to Dehradun</li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-06.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Package 3500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Valley of Flowers  
                  </h3>
                <p className="m-0">
                Bestowed with the rare and exotic Himalayan flora, the Valley of Flowers is a bouquet of nature peacefully snuggled in 
                the West Himalayan region of Uttarakhand. The trek of Valley of flowers goes through dense forests, along with Pushpawati 
                river and can be reached by crossing many bridges, glaciers and waterfalls on the way.</p>
              <li> Day 1 : Rishikesh → Joshmiath - 255km | 9hrs</li>
              <li> Day 2 : Joshmiath → Govindghat → Ghangaria</li>
              <li> Day 3 : Ghangaria → Valley of flowers → Ghangaria</li>
              <li> Day 4 : Ghangaria → Govindghat → Joshmiath</li>
              <li> Day 5 : Joshmiath → Rishikesh</li>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Package 5500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Phulara Ridge Trek
                  </h3>
                <p className="m-0">
                Phulara Ridge Trek is one of the most beautiful treks in India due to its scenic landscape. The Phulara Ridge Trek height
                  is 12000 feet..<ul>
                    <li>Day 1 : REACH SANKRI </li>
 		                <li> Day 2 : SANKRI → SIKOLTA</li>
                    <li> Day 3 : SIKOLTA → BHOJ GADI VIA KARSU THATCH</li>
                    <li> Day 4 : BHOJ GADI → PUSHTARA VIA PHULARA RIDGE</li>
                    <li> Day 5 : PUSHTARA → TALUKA. DRIVE TO SANKRI</li>
                    <li> Day 6 : DEPARTURE FROM SANKRI</li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-06.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Package 3500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Maldaru Lake Trek
                  </h3>
                <p className="m-0">
                The Maldaru Tal Trek is a summer delight that will leave you struck by awe because of the gorgeousness of the gigantic 
                Himalayan valley. Maldaru is a glacial lake and is about 300m long. The people of Osla village consider Maldaru Tal to have 
                auspicious waters. It is situated in Sankri range of Uttarkashi district of Uttarakhand.
                <ul>
                    <li> Day 1 : Dehradun → Sankri (1920m)</li>
 		                <li> Day 2 : Sankri → Dharkot (2500m)</li>
                    <li> Day 3 : Dharkot → Vishkpuri (2800m)</li>
                    <li> Day 4 : Vishkpuri → Rashi (3255m)</li>
                    <li> Day 5 : Rashi → Maldaru Lake ( 4200m)</li>
                    <li> Day 6 : Maldaru tal → Seema ( 2560m)</li>
                    <li> Day 7 : Seema → Sankri</li>
                  </ul></p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Package 5500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Rupin Pass Trek
                  </h3>
                <p className="m-0">
                Rupin Pass is a high altitude trek which starts from Dhaula in Uttarakhand and ends at Sangla. Majorly you will do Trekking in Himachal as 80% of the trek route is there itself.
                  <ul>
                    <li>Day 1 : Day 1: Drive from Dehradun to Dhaula – 200 Km by car – 10 hours
                    </li>
 		                <li>Day 2 :  Day 2: Trek to Sewa – 10 Km – 5/6 hours
                    </li>
                    <li>Day 3 : Day 3: Trek to Jhaka – 12 Km – 6/7 hours
                    </li>
                    <li>Day 4 : Day 4: Trek to Buras Kandi – 7 Km – 5 hours
                    </li>
                    <li>Day 5: Trek to  Dhanderas Thatch (Lower Waterfall) – 6 Km – 4 hours
                    </li>
                    <li>Day 6: Trek to Rati Pheri/Upper waterfall – 5 Km – 4 hours
                    </li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-06.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Pakage 3500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Chaainsheel Bugyal Trek 
                  </h3>
                <p className="m-0">
                Perched at a height of 3,600 meters, Chaainsheel Bugyal is a hidden destination in Uttarakhand that has eluded trekkers for a long time. 
                <ul>
                <li>Day 1: Dehra Dun to Balawat (1915 mts). Drive from Dehradun to Balawat, it takes around 10 hours to reach Balawat.
                  </li>
                <li>Day 2: Balawat to Sunaooti Thach (3170 mts). It takes 5-6 hours for 8 kms of trek.
                  </li>
                <li>Day 3: Sunaooti Thach to Samta Thach (3550 mts). It takes 7-8 hours for 14 kms of trek.
                  </li>
                <li>Day 4: Rest and exploration day the area.
                  </li>
                <li>Day 5: Samta Thach to Tikula Thach (3110 mts) via Sarutal. It takes 5-6 hours for 8 kms trek.
                  </li>
                <li>Day 6: Tikula Thach to Dagaan Moriyaach (2870). Another 4-5 hours of trek.
                  </li>
                <li>Day 7: Dagaan Moriyaach to Chinwa; 3-4 hours of trek. Departure for Dehradun, you might reach Dehradun by 10 pm.
                  </li>
                </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Pakage 5500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Kedartal Trek
                  </h3>
                <p className="m-0">
                  Kedartal is a popular winter trek which attracts adventurous souls to this place. There are no hotels, resorts or guesthouses en route to Kedartal. The trekkers usually take camping equipments along with them and camp along the trail when they halt at night. 
                  <ul>
                    <li>Day 1: Dehradun – Uttarkashi – Gangotri (Drive 258 kms, 10 hrs)</li>
 		                <li>Day 2: Gangotri – Bhoj Kharak (Trek – 8 kms)</li>
                    <li>Day 3: Bhoj Kharak – Kedar Kharak (Trek – 5 kms)</li>
                    <li>Day 4: Kedar Kharak – Kedar Tal – Jogin ABC – Kedar Tal (Trek – 10 kms)</li>
                    <li>Day 5: Kedar Tal – Gangotri (Trek – 18 kms)</li>
                    <li>Day 6: Gangotri – Uttarkashi – Dehradun (Drive – 258 kms, 10 hrs)</li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-06.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Pakage 3500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Gaumukh Tapovan Trek 
                  </h3>
                <p className="m-0">
                The Gangotri glacial expanse is nearly 24 km long and 6 to 8 km wide,
                 beginning from Gaumukh and extending as far as the Chaukhamba massif around Badrinath.
                 <ul>
                 <li>Day 1: Dehradun to Gangotri</li>
                 <li>Day 2: Acclimatisation day at Gangotri (10171 ft)</li>
                 <li>Day 3: Gangotri (10171 ft) to Chirbassa (11680 ft)</li>
                 <li>Day 4: Chirbassa (11680 ft) to Bhojwasa (12435 ft)</li>
                 <li>Day 5: Bhojwasa (12435 ft) to Khada Pathar via Gaumukh (13452 ft) & Tapovan (14600 ft)</li>
                 <li>Day 6: Tapovan (14600 ft) –Chirbassa(11680 ft)</li>
                 <li>Day 7: Chirbasa (11680 ft ) to Gangotri (10171 ft)</li>
                 <li>Day 8: Depart for Dehradun</li>
                 </ul>
                </p>
                </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>


            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Pakage 5500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Fachu Kandi Pass Trek
                  </h3>
                <p className="m-0">
                Fachu Kandi Pass is located at an altitude of 4356 mts in Govind Wildlife Sanctuary and trek starts from Sankri Village.
                  <ul>
                    <li>Day 1: Arrival at Sankri </li>
 		                <li>Day 2: Sankri – Kedarkantha Base Camp</li>
                    <li>Day 3: Summit Kedarkantha Peak and Trek to Dunda Thatch </li>
                    <li>Day 4: Dunda Thatch - Pushtara - Taloti</li>
                    <li>Day 5: Taloti – Saru Tal</li>
                    <li>Day 6: Saru Tal – Fachu Kandi Pass – Kotara Chani</li>
                    <li>Day 7: Kotara Chani – Leka Dogri</li>
                    <li>Day 8: Leka Dogri – Hanuman Chatti – Dehradun</li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-06.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Pakage 3500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Buran Ghati Trek 
                  </h3>
                <p className="m-0">
                If you are looking for all the best things in one trek, Buran Ghati Trek is for you. Buran Ghati trek starts from Janglik which is approx. 150 km from Shimla.
                  </p>
                  <ul>
                    <li>Day 1: Shimla to Janglik (9,200 ft) - 150 km Drive</li>
                    <li>Day 2: Janglik to Dayara (11000 Feet). 4 Hours approx.</li>
                    <li>Day 3: Dayara to Litham (11,800 Feet). 3 Hours approx.</li>
                    <li>Day 4: Litham to Chandranahan Lake (13,900 ft) & back to Litham, 4-5 hours</li>
                    <li>Day 5: Litham to Dunda (13500 Feet ) 5 Hours Approx.</li>
                    <li>Day 6: Dunda to River Camp (11,900 Feet) via Buran Ghati (15,050 Feet). 8 Hours Approx.</li>
                    <li>Day 7: River Camp to Kharcham/Barua (6,561 ft). Onward to Shimla - 250 km Drive</li>
                    <li>Day 8: Buffer Day</li>
                  </ul>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Pakage 5500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Ruinsara Lake Trek
                  </h3>
                <p className="m-0">
                Meandering through the Govind Vihar sanctuary, Har Ki Dun Valley is rich culturally and a paradise for bird watchers and nature lovers. 
                  <ul>
                    <li>Day 1: Delhi – Dehradun – Tons (1150 M)</li>
                    <li>Day 2: Tons – Taluka – Bheduka (1815 M)</li>
                    <li>Day 3: Bheduka – Dev Thach (3000 M)</li>
                    <li>Day 4: Dev Thach – Ruinsara Tal (3500 M)</li>
                    <li>Day 5: Ruinsara – Dev Thach (2335 M)</li>
                    <li>Day 6: Dev Thach – Bheduka (1150 M)</li>
 		                <li>Day 7: Bheduka – Tons (1150 M)</li>
                    <li>Day 8: Tons – Dehradun</li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-06.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Pakage 3500/-
                  </div>
                <h3 className="mt-0 mb-12">
                Dayarabugyal Trek 
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;