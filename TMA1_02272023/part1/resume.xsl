<xsl:stylesheet version = "1.0" 
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform"> 

<xsl:template match = "/resume">
	<html>
		<body>
			<h2>Amiel's Resume</h2>
			
			<table border = "1">
				<tr bgcolor="lightgreen">
					<th>First Name</th>
					<th>Last Name</th>
					<th>Age</th>
                    <th>Email</th>
                    <th>Description</th>
				</tr>
				
				<xsl:for-each select = "general">
					<tr>
						<td><xsl:value-of select = "firstname"/></td>
						<td><xsl:value-of select = "lastname"/></td>
						<td><xsl:value-of select = "age"/></td>
                        <td><xsl:value-of select = "email"/></td>
                        <td><xsl:value-of select = "description"/></td>
					</tr>
				</xsl:for-each>
			</table>

            <table border = "1">
                <tr bgcolor="lightgreen">
					<th>Univesity</th>
					<th>College</th>
				</tr>

                <xsl:for-each select = "education">
					<tr>
						<td><xsl:value-of select = "university"/></td>
						<td><xsl:value-of select = "college"/></td>
					</tr>
				</xsl:for-each>
            </table>

            <table border = "1">
                <tr bgcolor="lightgreen">
					<th>Univesity</th>
					<th>College</th>
				</tr>

                <xsl:for-each select = "work">
					<tr>
						<td><xsl:value-of select = "company"/></td>
						<td><xsl:value-of select = "date"/></td>
					</tr>
				</xsl:for-each>
            </table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>