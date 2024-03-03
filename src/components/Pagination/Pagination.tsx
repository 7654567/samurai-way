import s from "../Users/Users.module.css";
import React from "react";

export const Pagination = (props: any) => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	const pages = []

	for (let i = 1; i <= pagesCount; i++) pages.push(i)
	return <>
		{
			pages.map((p: any) => {
				const displayPages = p < 11 || p > pages.length - 10 //first 10, last 10
				return (displayPages) &&
					<span
						key={p}
						className={p === props.currentPage ? s.active : ""}
						onClick={() => props.setCurrentPage(p)}
					>
							{p + " "}
						</span>
			})
		}


	</>


}