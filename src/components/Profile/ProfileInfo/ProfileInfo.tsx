import React from 'react';
import s from "../Profile.module.css";

// type ProfileInfoPropsTypes = {}
export const ProfileInfo = () => {
	return (
		<>
			<img className={s.img}
				 src="https://media.istockphoto.com/id/1157442869/nl/foto/panoramisch-uitzicht-op-siebdniesjavrrie-lake-in-zweeds-lapland-vasterbotten-county-norrland.jpg?s=2048x2048&w=is&k=20&c=MhuM5Abs7Je29E6DeWhHlnsd9kYSUMKLm8YMOIh8THM="
				 alt="image"/>
			<p>ava+description</p>
		</>
	);
};
