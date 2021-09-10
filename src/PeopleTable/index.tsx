import './index.scss';

type PeopleTableProps = {
	rows: {
		age?: number;
		firstName?: string;
		id: string;
		lastName?: string;
	}[];
}

const PeopleTable = ({ rows }: PeopleTableProps) => {
	return (
		<table>
			<thead>
				<tr>
					<th className="left-align">ID</th>
					<th className="left-align">First Name</th>
					<th className="left-align">Last Name</th>
					<th className="right-align">Age</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => {
					const { age, id, firstName, lastName } = row;
					return (
						<tr key={id}>
							<td className="left-align">{id}</td>
							<td className="left-align">{firstName ? firstName : '-'}</td>
							<td className="left-align">{firstName ? lastName : '-'}</td>
							<td className="right-align">{age ? age : '-'}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	)
}

export default PeopleTable;
