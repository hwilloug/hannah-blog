"""Add preferences to newsletter table

Revision ID: d099a1dcd1cc
Revises: 5b2423dc9d5c
Create Date: 2024-04-08 08:36:57.748237

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd099a1dcd1cc'
down_revision: Union[str, None] = '5b2423dc9d5c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('newsletter', sa.Column('food', sa.Boolean(), server_default='True', nullable=False))
    op.add_column('newsletter', sa.Column('gardening', sa.Boolean(), server_default='True', nullable=False))
    op.add_column('newsletter', sa.Column('crafts', sa.Boolean(), server_default='True', nullable=False))
    op.add_column('newsletter', sa.Column('coding', sa.Boolean(), server_default='True', nullable=False))
    op.add_column('newsletter', sa.Column('books', sa.Boolean(), server_default='True', nullable=False))
    op.add_column('newsletter', sa.Column('antiquing', sa.Boolean(), server_default='True', nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('newsletter', 'antiquing')
    op.drop_column('newsletter', 'books')
    op.drop_column('newsletter', 'coding')
    op.drop_column('newsletter', 'crafts')
    op.drop_column('newsletter', 'gardening')
    op.drop_column('newsletter', 'food')
    # ### end Alembic commands ###