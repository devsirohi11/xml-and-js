<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
  <body>
  <h2> Products Data List</h2>

<ul>
<xsl:for-each select="products/product">
<li> sku : <xsl:value-of select="@sku" /></li>
  <li> Created At : <xsl:value-of select="@createdAt" /></li>
  <li> Shippable : <xsl:value-of select="@shippable" /></li>
  <li> Product Name : <xsl:value-of select="productName" /></li>
  <li> Manufacturer : <xsl:value-of select="manufacturer" /></li>
  <li>Description : <xsl:value-of select="description" /></li>
  <li> Price : <xsl:value-of select="prices/price" /></li>
  <li> Product Items : <xsl:value-of select="productItems" /><br/><br/></li>

  
  </xsl:for-each>
</ul>
 
  </body>
  </html>

</xsl:template>

</xsl:stylesheet>