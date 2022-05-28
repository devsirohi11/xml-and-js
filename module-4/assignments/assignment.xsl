<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <body>
             <h2> Catalog</h2>
                <ul>
                    <xsl:for-each select="catalog/product">
                    
                        <li> Created At : <h3><xsl:value-of select="@product_id" /></h3></li>
                        <li> Shippable : <p><xsl:value-of select="@discription" /></p></li>
                        <li> Product Name : <xsl:value-of select="@product_image" /><br/><br/></li>
                        
                    
                        

                        <table border="1">
                            <THEAD>
                                <TR bgcolor="lightgreen">
                                    <TD><B>Item Number</B></TD>
                                    <TD ><B>Price</B></TD>
                                    <TD><B>Gender</B></TD>
                                    <TD ><B>Size</B></TD>
                                </TR>
                            </THEAD>
                            <TBODY>
                            <xsl:for-each select="catalog_item">
                                 
                                <TR bgcolor="pink"> 
                                    <TD><xsl:value-of select="item_number" /></TD>   
                                    <TD><xsl:value-of select="price" /></TD>

                                    

                                     <xsl:choose>
                                        <xsl:when test="@gender = 'Men' ">
                                          <td>M</td>
                                         </xsl:when>
                                          <xsl:otherwise>
                                          <td>F</td>
                                         </xsl:otherwise>
                                         </xsl:choose>



                                    <TD><xsl:value-of select="@description" />

                                        
                                        <table border="1" bgcolor="lightblue">
                                                <THEAD>
                                                    <tr>
                                                        <td>Image</td>
                                                        <td>Color</td>
                                                    </tr>
                                                </THEAD>
                                                    
                                                 <TBODY>
                                                  <xsl:for-each select="size/color_swatch">
                                                        <tr bgcolor="coral" >
                                                             <TD><xsl:value-of select="@image"/></TD>                                                            
                                                             <TD><xsl:value-of select="color_swatch"/></TD>
                                                         </tr>
                                                    </xsl:for-each>
                                                    
                                                </TBODY>  

                                         </table>
                                        
                                    
                                    </TD>
                                </TR>
                            </xsl:for-each>
                            </TBODY>
                        </table>
                                   


                     </xsl:for-each>
                </ul>

        </body>
    </html>

</xsl:template>

</xsl:stylesheet>